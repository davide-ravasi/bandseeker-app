import type { NextPage } from "next";

import NewBandSection from "../../components/newbandsection";
import { ManagePhotos } from "../../components/managephotos";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/layout";

const NewBand: NextPage = (props) => {
  return (
    <Layout isBlock={true}>
      <NewBandSection apolloClient={undefined} apolloState={undefined} />
    </Layout>
  );
};

export default withApollo(NewBand);
