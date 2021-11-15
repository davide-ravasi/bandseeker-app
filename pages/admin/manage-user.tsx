import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import { ManageUserSection } from "../../components/manageusersection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageUser: NextPage = ({ router: query }) => {
  const router = useRouter();
  const user = router.query;

  return (
    <div>
      <Header />
      <ManageUserSection
        apolloClient={undefined}
        apolloState={undefined}
        id={user.id}
      />

      <Footer />
    </div>
  );
};

export default withApollo(ManageUser);
