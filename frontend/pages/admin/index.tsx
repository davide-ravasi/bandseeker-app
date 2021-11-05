import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Link href="/admin/manage-band">
          <AdminLink>Manage band</AdminLink>
        </Link>
        <Link href="/admin/manage-musician">
          <AdminLink>Manage musician</AdminLink>
        </Link>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 110px);
  max-width: 800px;
  margin: 40px auto;
`;

const AdminLink = styled.div`
  font-family: "Lato", sans-serif;
  cursor: pointer;
  color: ${props => props.theme.colors.lightgrey};

`;

export default Home;