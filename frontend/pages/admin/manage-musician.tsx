import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import { ManageMusicianSection } from "../../components/managemusiciansection";
import { ManagePhotos } from "../../components/managephotos";

const ManageBand: NextPage = () => {
  return (
    <div>
      <Header />
      <ManageMusicianSection apolloClient={undefined} apolloState={undefined} />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default ManageBand;