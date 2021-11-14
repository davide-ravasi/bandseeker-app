import type { NextPage } from "next";
import { Header } from "../../components/header";

import { Footer } from "../../components/footer";
import NewUserSection from "../../components/newusersection";
import { ManagePhotos } from "../../components/managephotos";
import { withApollo } from "../../lib/apollo";

const NewUser: NextPage = (props) => {
  return (
    <div>
      <Header />
      <NewUserSection apolloClient={undefined} apolloState={undefined} />
      <ManagePhotos />
      <Footer />
    </div>
  );
};

export default withApollo(NewUser);
