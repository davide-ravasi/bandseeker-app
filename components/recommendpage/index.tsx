import React from "react";
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, gql } from "@apollo/client";
import { BandCard } from "../bandcard";
import { UserCard } from "../usercard";

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      name
      nickname
      description
      email
      birth_date
      address
      genres {
        name
      }
      instruments {
        name
      }
      avatar {
        url
      }
    }
  }
`;

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
      searching {
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
      avatar {
        url
      }
    }
  }
`;

export const RecommendPage = () => {
  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USERS);

  const {
    loading: loadingBand,
    error: errorBand,
    data: dataBand,
  } = useQuery(GET_BANDS);

  if (loadingUser || loadingBand) return <p>Loading...</p>;
  if (errorUser || errorBand) return <p>Error :(</p>;

  return (
    <div>
      <Background>
        <Container>
          <SectionTitle>
            BANDS SEARCHING FOR MUSICIANS{" "}
            <Seemore>
              {" "}
              SEE MORE <FontAwesomeIcon icon={faAngleRight} />
            </Seemore>
          </SectionTitle>
          <SectionContainer>
            {dataBand.getBands.slice(0, 4).map((band) => (
              <BandCard key={band} band={band} />
            ))}
          </SectionContainer>
          <SectionTitle>
            MUSICIANS SEARCHING A BAND
            <Seemore>
              {" "}
              SEE MORE <FontAwesomeIcon icon={faAngleRight} />
            </Seemore>
          </SectionTitle>
          <SectionContainer>
            {dataUser.getUsers.slice(0, 4).map((user) => (
              <UserCard key={user} user={user} />
            ))}
          </SectionContainer>
          <SectionTitle>NEW MEMBERS</SectionTitle>
          <SectionContainer>
            {dataUser.getUsers.slice(0, 4).map((user) => (
              <UserCard key={user} user={user} />
            ))}
          </SectionContainer>
        </Container>
      </Background>
    </div>
  );
};

const Background = styled.div`
  position: relative;
  background: rgba(0, 16, 17, 1);
`;

const Container = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1100px;
  margin: 0 auto;
`;

const Seemore = styled.a`
  font-family: "Lato", sans-serif;
  color: #ffffff;
  padding-left: 10px;
  font-size: 15px;
`;

const SectionTitle = styled.h1`
  position: relative;
  height: 25px;
  width: 100%;

  margin-left: 0px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 82.03%;

  margin-top: 50px;
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
`;
