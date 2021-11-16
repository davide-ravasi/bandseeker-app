import type { NextPage } from "next";
import Link from "next/link";
import memo from "react";
import { SearchSection } from "../components/searchsection";
import { Login } from "../components/login";
import { SignUp } from "../components/signup";
import { Header } from "../components/header";
import { RecommendPage } from "../components/recommendpage";

import { Footer } from "../components/footer";

import { withApollo } from "../lib/apollo";
import { withRouter, useRouter } from "next/router";

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const type = router.query.type;

  console.log(type);

  return (
    <div>
      <Header />
      {type == "login" && <Login />}
      {type == "signup" && <SignUp />}
      {type == "searchsection" && <SearchSection />}
      {type == null && <SearchSection />}
      <RecommendPage />
      <Footer />
    </div>
  );
};

export default withApollo(Home);
