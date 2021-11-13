import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/apollo";

const GET_BANDS = gql`
  query getBands {
    getBands {
      id
      name
      description
      location
      foundation_date
      genres {
        name
      }
      videos {
        title
        url
      }
      images {
        name
      }
      members {
        name
      }
    }
  }
`;

const Admin: NextPage = () => {
  const { loading, error, data } = useQuery(GET_BANDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Header />
      <Container>
        <AdminTitle>YOUR PROFILE</AdminTitle>
        <SectionContainer>
          <Link
            href={{
              pathname: "/admin/manage-musician",
              // query: { id: JSON.stringify(user.id) },
            }}
          >
            <a>
              Edit your profile <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Link>
        </SectionContainer>
        <AdminTitle>YOUR BANDS</AdminTitle>
        <SectionContainer>
          <Link href="/admin/new-band">
            <a>
              Make New Band
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Link>
          {data.getBands.map((band) => (
            <Link
              href={{
                pathname: "/admin/manage-band",
                query: { id: band.id },
              }}
              as={"/admin/manabe-band"}
            >
              <a key={band}>
                Band Name 01 {band.name}
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </Link>
          ))}
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default withApollo(Admin);

const Container = styled.div`
  position: relative;
  height: calc(100vh - 110px);
  max-width: 800px;
  margin: 40px auto;
`;

const AdminTitle = styled.h1`
  position: relative;
  height: 25px;
  width: 100%;

  margin-left: 0px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 82.03%;

  margin-top: 20px;
  margin-bottom: 8px;
  align-items: start;

  color: #757780;
`;

const SectionContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  margin-bottom: 10px;

  & > a {
    font-family: "Lato", sans-serif;
    color: #fff;
    display: block;
    width: 100%;
  }
`;
