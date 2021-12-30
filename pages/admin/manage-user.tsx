import type { NextPage } from "next";

import Layout from "../../components/layout";
import { ManageUserSection } from "../../components/manageusersection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageUser: NextPage = ({ router: query }) => {
  const router = useRouter();
  const user = router.query;

  return (
    <Layout isBlock={true}>
      <ManageUserSection
        apolloClient={undefined}
        apolloState={undefined}
        id={user.id}
      />
    </Layout>
  );
};

export default withApollo(ManageUser);
