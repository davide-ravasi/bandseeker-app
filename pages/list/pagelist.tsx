import type { NextPage } from "next";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Layout from "../../components/layout";
import GET_USERS from '../../graphql/queries/getUsers';
import GET_BANDS from '../../graphql/queries/getBands';
import GET_USERS_FROM_SEARCH from '../../graphql/queries/getUsersFromSearch';
import GET_BANDS_FROM_SEARCH from '../../graphql/queries/getBandsFromSearch'
import { ElementCard } from "../../components/elementcard";
import { SectionTitle, SectionContainer, SimpleText } from '../../styles/pageList.style';
import { Band, User } from "../../types";

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
            .map((band: Band) => <ElementCard key={band} element={band} />)}

        {searchType === "band" && dataBand && dataBand.getBandsFromSearch.length === 0 && type === 'search' && (
          <SimpleText>No results for this term</SimpleText>
        )}

        {dataUser &&
          dataUser.getUsersFromSearch.length &&
          dataUser.getUsersFromSearch
            .slice(0, 4)
            .map((user: User) => <ElementCard key={user} element={user} />)}

        {dataUsers &&
          dataUsers.getUsers.length &&
          dataUsers.getUsers
            .map((user: User) => <ElementCard key={user} element={user} />)}

        {dataBands &&
          dataBands.getBands.length &&
          dataBands.getBands
            .map((band: Band) => <ElementCard key={band} element={band} />)}

        {searchType === "member" &&
          dataUser.getUsersFromSearch.length === 0 && type === 'all' && (
            <SimpleText>No results for this term</SimpleText>
          )}
      </SectionContainer>
    </Layout>
  );
};

export default withApollo(Home);
