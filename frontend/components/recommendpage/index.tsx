import React from "react";
import { Usercard } from "../usercard";
import styled from "styled-components";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery, gql } from "@apollo/client";
import { Bandcard } from "../bandcard";


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

export const RecommendPage = () => {
  const { loading, error, data } = useQuery(GET_BANDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Background>
        <Container>
          <SectionTitle>
            BANDS SEARCHING FOR MUSICIANS <Seemore> SEE MORE <FontAwesomeIcon icon={faAngleRight} /></Seemore>
          </SectionTitle>
          <SectionContainer>
            {data.getBands.map((band) => (
              <Bandcard band={band} />
            ))}
          </SectionContainer>
          <SectionTitle>
            MUSICIANS SEARCHING A BAND<Seemore> SEE MORE <FontAwesomeIcon icon={faAngleRight} /></Seemore>
          </SectionTitle>
          <SectionContainer>
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
          </SectionContainer>
          <SectionTitle>NEW MEMBERS</SectionTitle>
          <SectionContainer>
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
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
