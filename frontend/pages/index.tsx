import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "styled-components";

import { SearchSection } from "../components/searchsection";
import { Header } from "../components/header";

import { theme } from "../styles/globalStyles";

import Landing from "../components/landingpage";

import { RecommendPage } from "../components/recommendpage";

import { Footer } from "../components/footer";

import { withApollo } from "../lib/apollo";
import { useQuery, gql } from "@apollo/client";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  console.log(data, loading);
  if (loading) return <div />;

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
