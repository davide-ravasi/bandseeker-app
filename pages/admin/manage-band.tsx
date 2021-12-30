import type { NextPage } from "next";
import Layout from "../../components/layout";
import ManageBandSection from "../../components/managebandsection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageBand: NextPage = ({ router: query }) => {
  const router = useRouter();
  const band = router.query;

  return (
    <Layout isBlock={true}>
      <ManageBandSection
        apolloClient={undefined}
        apolloState={undefined}
        id={band.id}
      />
    </Layout>
  );
};

export default withApollo(ManageBand);
