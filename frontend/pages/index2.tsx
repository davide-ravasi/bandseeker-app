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

export default Home;
