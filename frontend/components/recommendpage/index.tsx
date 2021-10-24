import React from "react";
import { Usercard } from "../usercard";
import styled from "styled-components";

export const RecommendPage = () => {
  return (
    <div>
      <Background>
        <Container>
          <SectionTitle>
            BANDS SEARCHING FOR MUSICIANS <Seemore> SEE MORE</Seemore>
          </SectionTitle>
          ;
          <SectionContainer>
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
          </SectionContainer>
          <SectionTitle>
            MUSICIANS SEARCHING A BAND<Seemore> SEE MORE</Seemore>
          </SectionTitle>
          ;
          <SectionContainer>
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
          </SectionContainer>
          <SectionTitle>NEW MEMBERS</SectionTitle>;
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

  /* width: 100vw; */

  padding: 0 15rem;

  /* padding: 0 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #4c4b63; */
`;

const Seemore = styled.div`
  float: right;
  display: flex;

  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  margin-left: 30px;
  font-size: 15px;
`;

const SectionTitle = styled.div`
  position: relative;

  width: 800px;
  height: 25px;

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

  margin-bottom: 10px;
`;

const UsercardContainer = styled.div``;
