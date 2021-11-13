import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { faAngleRight, faPlus, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { gql, useQuery, useMutation } from "@apollo/client";
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

const DELETE_BAND = gql`
  mutation DeleteBand($id: ID!) {
    deleteBand(id: $id)
  }
`;

const Admin: NextPage = () => {
  const { loading, error, data } = useQuery(GET_BANDS);
  const [elToDelete, setElToDelete] = useState("");

  const [deleteBand] = useMutation(DELETE_BAND, {
    variables: {
      id: elToDelete
    },
    refetchQueries: [GET_BANDS],
  }
  );

  const onDelete = (id) => {
    setElToDelete(id.toString());
  }

  useEffect(() => {
    if (elToDelete !== "") {
      deleteBand();
      setElToDelete("");
    }
  }, [elToDelete]);

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
        <AdminTitle>YOUR BANDS
          <Link href="/admin/new-band">
            <PlusButton title="Add a new band">
              <FontAwesomeIcon icon={faPlus} />
            </PlusButton>
          </Link></AdminTitle>
        <SectionContainer>
          {data.getBands.map((band) => (
            <ListBlock>
              <span>
                Band Name: {band.name ? band.name : 'no name'}
              </span>
              <Link
                href={{
                  pathname: "/admin/manage-band",
                  query: { id: band.id },
                }}
                as={"/admin/manabe-band"}
              >
                <ModifyButton title="Modify this band" key={band}>
                  <FontAwesomeIcon icon={faPen} />
                </ModifyButton>
              </Link>
              <DeleteButton title="Delete this band" key={band} onClick={() => onDelete(band.id)}>
                <FontAwesomeIcon icon={faTimes} />
              </DeleteButton>
            </ListBlock>
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

  & > a {

  }
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

const PlusButton = styled.a`
  display: inline-block;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: ${props => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;
  margin-left: 10px;
  cursor: pointer;

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;

const ListBlock = styled.div`
  display: flex;
  padding: 8px 0;
  width: 100%;
  color: #fff;
  font-family: Lato, sans-serif;
  border-bottom: 1px solid ${props => props.theme.colors.mediumgrey};
`;

const DeleteButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colors.red};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 28px;
  height: 28px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-left: 8px;

  & > svg {
    color: #fff;
  }
`;

const ModifyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 28px;
  height: 28px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-left: 8px;

  & > svg {
    color: #fff;
  }
`;
