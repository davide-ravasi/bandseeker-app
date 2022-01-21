import type { NextPage } from "next";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Layout from "../../components/layout";
import { ElementCard } from "../../components/elementcard";
import { SectionTitle, SectionContainer, SimpleText } from '../../styles/pageList.style';

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

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      name
      nickname
      description
      email
      birth_date
      address
      genres {
        name
      }
      instruments {
        name
      }
      avatar {
        url
      }
    }
  }
`;

const GET_BANDS = gql`
  query getBands {
    getBands {
      id
      name
      description
      location
      foundation_date
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

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const query = router.query;
  const type = query.type;

  const searchType = query.searchType;
  const searchBy = query.searchBy;
  const searchQuery = query.searchQuery;

  const skipUsersQuery = searchType !== 'user' || type !== 'all';
  const skipBandsQuery = searchType !== 'band' || type !== 'all';
  const skipUserQuery = searchType !== 'user' || type !== 'search';
  const skipBandQuery = searchType !== 'band' || type !== 'search';

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

  const {
    loading: loadingUsers,
    error: errorUsers,
    data: dataUsers,
  } = useQuery(GET_USERS, {
    skip: skipUsersQuery,
  });

  const {
    loading: loadingBands,
    error: errorBands,
    data: dataBands,
  } = useQuery(GET_BANDS, {
    skip: skipBandsQuery
  });

  if (loadingBand || loadingUser || loadingBands || loadingUsers) return <p>Loading...</p>;
  if (errorBand || errorUser || errorBands || errorUsers) return <p>Error :(</p>;

  return (
    <Layout isBlock={true}>
      <SectionTitle>
        RESULTS FOR {type === 'search' && searchQuery} {type === 'search' && 'IN'} {skipBandQuery ? "members" : "bands"} {type === 'search' && `BY ${searchBy}`}
      </SectionTitle>
      <SectionContainer>
        {dataBand &&
          dataBand.getBandsFromSearch.length &&
          dataBand.getBandsFromSearch
            .slice(0, 4)
            .map((band) => <ElementCard key={band} element={band} />)}

        {searchType === "band" && dataBand && dataBand.getBandsFromSearch.length === 0 && type === 'search' && (
          <SimpleText>No results for this term</SimpleText>
        )}

        {dataUser &&
          dataUser.getUsersFromSearch.length &&
          dataUser.getUsersFromSearch
            .slice(0, 4)
            .map((user) => <ElementCard key={user} element={user} />)}

        {dataUsers &&
          dataUsers.getUsers.length &&
          dataUsers.getUsers
            .map((user) => <ElementCard key={user} element={user} />)}

        {dataBands &&
          dataBands.getBands.length &&
          dataBands.getBands
            .map((band) => <ElementCard key={band} element={band} />)}

        {searchType === "member" &&
          dataUser.getUsersFromSearch.length === 0 && type === 'all' && (
            <SimpleText>No results for this term</SimpleText>
          )}
      </SectionContainer>
    </Layout>
  );
};

export default withApollo(Home);
