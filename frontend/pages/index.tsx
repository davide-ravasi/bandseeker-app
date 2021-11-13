import type { NextPage } from "next";

import { SearchSection } from "../components/searchsection";
import { Header } from "../components/header";
import { RecommendPage } from "../components/recommendpage";

import { Footer } from "../components/footer";

import { withApollo } from "../lib/apollo";


const Home: NextPage = () => {

  return (
    <div>
      <Header />
      {/* <Landing /> */}
      <SearchSection />

      <RecommendPage />
      <Footer />
    </div>
  );
};

export default withApollo(Home);
