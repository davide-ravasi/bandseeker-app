import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import NewBandSection from "../../components/newbandsection";
import { ManagePhotos } from "../../components/managephotos";
import { withApollo } from "../../lib/apollo";

const NewBand: NextPage = (props) => {
  return (
    <div>
      <Header />
      <NewBandSection apolloClient={undefined} apolloState={undefined} />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(NewBand);
