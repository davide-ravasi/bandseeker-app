import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import ManageBandSection from "../../components/managebandsection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageBand: NextPage = ({ router: query }) => {
  const router = useRouter();
  const band = router.query;

  return (
    <div>
      <Header />
      <ManageBandSection
        apolloClient={undefined}
        apolloState={undefined}
        id={band.id}
      />

      <Footer />
    </div>
  );
};

export default withApollo(ManageBand);
