import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import NewMusicianSection from "../../components/newmusiciansection";
import { ManagePhotos } from "../../components/managephotos";
import { withApollo } from "../../lib/apollo";

const NewMusician: NextPage = (props) => {
  return (
    <div>
      <Header />
      <NewMusicianSection apolloClient={undefined} apolloState={undefined} />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(NewMusician);
