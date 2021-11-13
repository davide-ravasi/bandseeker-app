import React from "react";
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, gql } from "@apollo/client";
import { BandCard } from "../bandcard";
import { UserCard } from "../usercard";

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

const GET_USERS = gql`
  query getUsers {
    getUsers {
      name
      nickname
      description
      email
      birth_date
      address
      instruments
      avatar {
        url
      }
    }
  }
`;

export const RecommendPage = () => {
  const {
    loading: loadingBand,
    error: errorBand,
    data: dataBand,
  } = useQuery(GET_BANDS);

  if (loadingBand) return <p>Loading...</p>;
  if (errorBand) return <p>Error :(</p>;

  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USERS);

  if (loadingUser) return <p>Loading...</p>;
  if (errorUser) return <p>Error :(</p>;

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
            {dataBand.getBands.map((band) => (
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
            {dataUser.getUsers.map((user) => (
              <UserCard key={user} user={user} />
            ))}
          </SectionContainer>
          <SectionTitle>NEW MEMBERS</SectionTitle>
          <SectionContainer>
            {dataUser.getUsers.map((user) => (
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

  /* width: 100vw; */

  /* padding: 0 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #4c4b63; */
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
  /* identical to box height, or 25px */

  /* align-items: center; */

  color: #757780;
`;

const SectionContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 10px;
`;

const UsercardContainer = styled.div``;
