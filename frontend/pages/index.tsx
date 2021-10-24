import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { SearchSection } from "../components/searchsection";
import { Header } from "../components/header";

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
