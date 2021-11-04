import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import { ManageBandSection } from "../../components/managebandsection";
import { ManagePhotos } from "../../components/managephotos";

const ManageBand: NextPage = () => {
  return (
    <div>
      <Header />
      <ManageBandSection />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default ManageBand;