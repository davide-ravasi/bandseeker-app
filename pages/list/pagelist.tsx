import type { NextPage } from "next";
import styled from "styled-components";
import { BandCard } from "../../components/bandcard";
import { UserCard } from "../../components/usercard";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Layout from "../../components/layout";

const GET_BANDS_FROM_SEARCH = gql`
  query getBandsFromSearch($type: String, $text: String) {
    getBandsFromSearch(type: $type, text: $text) {
      id
      name
      description
      location
      foundation_date
      email
      genres {
        name
      }
      searching {
        name
      }
      videos {
        title
        url
      }
      images {
        name
      }
      members {
        name
      }
      avatar {
        url
      }
    }
  }
`;

const GET_USERS_FROM_SEARCH = gql`
  query getUsersFromSearch($type: String, $text: String) {
    getUsersFromSearch(type: $type, text: $text) {
      id
      name
      nickname
      description
      email
      genres {
        name
      }
      instruments {
        name
      }
      birth_date
      address
      avatar {
        url
      }
    }
  }
`;

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const query = router.query;
  const type = query.type;

  const searchType = query.searchType;
  const searchBy = query.searchBy;
  const searchQuery = query.searchQuery;
  const skipUserQuery = searchType === "band";
  const skipBandQuery = searchType === "member";

  const {
    loading: loadingBand,
    error: errorBand,
    data: dataBand,
  } = useQuery(GET_BANDS_FROM_SEARCH, {
    variables: { type: searchBy, text: searchQuery },
    skip: skipBandQuery,
  });

  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USERS_FROM_SEARCH, {
    variables: { type: searchBy, text: searchQuery },
    skip: skipUserQuery,
  });

  if (loadingBand || loadingUser) return <p>Loading...</p>;
  if (errorBand || errorUser) return <p>Error :(</p>;

  return (
    <Layout>
      <SectionTitle>
        RESULTS FOR {searchQuery} IN {skipBandQuery ? "Members" : "Bands"} BY {searchBy}
      </SectionTitle>
      <SectionContainer>
        {dataBand &&
          dataBand.getBandsFromSearch.length &&
          dataBand.getBandsFromSearch
            .slice(0, 4)
            .map((band) => <BandCard key={band} band={band} />)}

        {searchType === "band" && dataBand.getBandsFromSearch.length === 0 && (
          <SimpleText>No results for this term</SimpleText>
        )}

        {dataUser &&
          dataUser.getUsersFromSearch.length &&
          dataUser.getUsersFromSearch
            .slice(0, 4)
            .map((user) => <UserCard key={user} user={user} />)}

        {searchType === "member" &&
          dataUser.getUsersFromSearch.length === 0 && (
            <SimpleText>No results for this term</SimpleText>
          )}
      </SectionContainer>
    </Layout>
  );
};

const SectionTitle = styled.h1`
  position: relative;
  height: 25px;
  width: 100%;

  margin-left: 0px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 82.03%;

  margin-top: 50px;
  align-items: start;

  color: #757780;
`;

const SectionContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const SimpleText = styled.p`
  font-family: Lato, sans-serif;
  color: #fff;
`;

export default withApollo(Home);
