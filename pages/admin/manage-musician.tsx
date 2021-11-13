import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import { ManageMusicianSection } from "../../components/managemusiciansection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter, useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageMusician: NextPage = ({ router: query }) => {
  const router = useRouter();
  const user = router.query;

  console.log(user.id);
  return (
    <div>
      <Header />
      <ManageMusicianSection
        apolloClient={undefined}
        apolloState={undefined}
        id={user.id}
      />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(ManageMusician);
