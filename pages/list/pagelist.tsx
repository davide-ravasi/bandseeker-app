import type { NextPage } from "next";
import styled from "styled-components";
import { BandCard } from "../../components/bandcard";
import { UserCard } from "../../components/usercard";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";


const GET_BAND_BY_CONTENT = gql`
  query getBandsByContent($text: String) {
    getBandsByContent(text: $text) {
      id
      name
      description
      location
      foundation_date
      email
      genres {
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
    }
  }
`;

const GET_USER_BY_CONTENT = gql`
  query getUserByContent($text: String) {
    getUserByContent(text: $text) {
      id
      name
      nickname
      description
      email
      birth_date
      address
      instruments
      avatar {
        url
      }
    }
  }`;

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const query = router.query;
  const type = query.type;

  const searchType = query.searchType;
  const searchBy = query.searchBy;
  const searchQuery = query.searchQuery;
  const skipUserQuery = searchType === 'band';
  const skipBandQuery = searchType === 'member';

  const {
    loading: loadingBand,
    error: errorBand,
    data: dataBand,
  } = useQuery(GET_BAND_BY_CONTENT, {
    variables: { text: searchQuery },
    skip: skipBandQuery,
  });

  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USER_BY_CONTENT, {
    variables: { text: searchQuery },
    skip: skipUserQuery,
  });

  if (loadingBand || loadingUser) return <p>Loading...</p>;
  if (errorBand || errorUser) return <p>Error :(</p>;

  return (
    <div>
      <Header />
      <Container>
        <SectionTitle>
          RESULTS FOR "{searchQuery}" IN {skipBandQuery ? "Members" : "Bands"}
        </SectionTitle>
        <SectionContainer>
          {dataBand && dataBand.getBandsByContent.length && dataBand.getBandsByContent.slice(0, 4).map((band) => (
            <BandCard key={band} band={band} />
          ))}

          {searchType === 'band' && dataBand.getBandsByContent.length === 0 && <SimpleText>"No results for this term"</SimpleText>}

          {dataUser && dataUser.getUserByContent.length && dataUser.getUserByContent.slice(0, 4).map((user) => (
            <UserCard key={user} user={user} />
          ))}

          {searchType === 'member' && dataUser.getUserByContent.length === 0 && <SimpleText>"No results for this term"</SimpleText>}
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 1100px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
`;

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
  color: #fff
`;

export default withApollo(Home);
