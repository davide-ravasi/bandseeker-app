import React from "react";
import styled from "styled-components";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoCard } from "../photocard";

export const ManagePhotos = () => {
  return (
    <div>
      <Background>
        <Container>
          <SectionTitle>
            MANAGE YOUR PHOTOS <PlusButton><FontAwesomeIcon icon={faPlus} /></PlusButton>
          </SectionTitle>
          <SectionContainer>
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
          </SectionContainer>
        </Container>
      </Background>
    </div >
  );
};

const Background = styled.div`
  position: relative;
  background: rgba(0, 16, 17, 1);
`;

const Container = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
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

const PlusButton = styled.a`
  display: inline-block;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: ${props => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;
