import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import ManageBandSection from "../../components/managebandsection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageBand: NextPage = ({ router: query }) => {
  const router = useRouter();
  const bandId = router.query;

  console.log(bandId.id);
  return (
    <div>
      <Header />
      <ManageBandSection
        apolloClient={undefined}
        apolloState={undefined}
        id={bandId.id}
      />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(ManageBand);
