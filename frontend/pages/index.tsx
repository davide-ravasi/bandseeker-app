import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { SearchForm } from "../components/searchForm";
import { Header } from "../components/header";
import { UserPage } from "../components/userpage";
import Landing from "../components/landingpage";
import { Usercard } from "../components/usercard";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Landing /> */}
      <SearchForm />
      <Usercard />
      {/* <UserPage /> */}
    </div>
  );
};

export default Home;
