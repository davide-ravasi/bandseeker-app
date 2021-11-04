import type { NextPage } from "next";
import { Header } from "../../components/header";
import styled from "styled-components";

import { Footer } from "../../components/footer";

const ManageBand: NextPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <p>Under construction</p>
      </Container>
      <Footer />
    </div>
  );
};


const Container = styled.div`
  font-family: 'Lato', sans-serif;
  position: relative;
  height: calc(100vh - 110px);
  max-width: 800px;
  margin: 40px auto;
  & > p {
    color: #fff;
    font-size: 20px;
  }
`;

export default ManageBand;