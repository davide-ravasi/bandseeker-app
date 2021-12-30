import type { NextPage } from "next";

import Layout from "../../components/layout";
import NewUserSection from "../../components/newusersection";
import { ManagePhotos } from "../../components/managephotos";
import { withApollo } from "../../lib/apollo";

const NewUser: NextPage = (props) => {
  return (
    <Layout isBlock={true}>
      <NewUserSection apolloClient={undefined} apolloState={undefined} />
    </Layout>
  );
};

export default withApollo(NewUser);