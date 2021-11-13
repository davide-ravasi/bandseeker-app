import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import { ManageMusicianSection } from "../../components/managemusiciansection";
import { ManagePhotos } from "../../components/managephotos";
import { withRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const ManageMusician: NextPage = () => {
  //const id = JSON.parse(query.id);
  return (
    <div>
      <Header />
      <ManageMusicianSection
        apolloClient={undefined}
        apolloState={undefined}
        id={"618b22859e504e7bdb9cc58c"}
      />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(ManageMusician);
