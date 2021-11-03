import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {theme} from '../../styles/theme.styles';
import { faAngleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Usercard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <CardImage />
        <Button>ROCK</Button>
        <ArrowButton>
          <FontAwesomeIcon icon={faAngleRight} />
        </ArrowButton>
        <CardTitle>THE MANNEQUINS</CardTitle>
        <CardDetail>
          Lorem ipsum dolor sit amet, consectetur incididunt ut labore et
          dolore...
        </CardDetail>
        <Location><FontAwesomeIcon icon={faMapMarkerAlt} /> Denver</Location>
        <Searching>SEARCHING:</Searching>
      </CardContainer>
    </ThemeProvider>
  );
};

const CardContainer = styled.div`
  width: 224px;
  height: 343px;
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 3.11%;
  background: linear-gradient(180deg, #757780 0%, #242527 100%);
  border-radius: 13px;
  margin-right: 30px;

  margin-top: 10px;
`;
const ArrowButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 79.02%;
  right: 5.8%;
  top: 38.99%;
  bottom: 51.41%;
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

const Location = styled.div`
  position: absolute;
  left: 3.71%;
  top: 70.9%;
  bottom: 25.14%;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #c4c4c4;

  & > svg {
    margin-right: 4px;
    color: ${props => props.theme.colors.cyan};
  }
`;

const Button = styled.div`
  position: absolute;

  font-family: "Lato", sans-serif;

  font-size: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 5px;

  left: 33.93%;
  right: 42.41%;
  top: 40.11%;
  bottom: 53.39%;

  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`;

const Searching = styled.div`
  position: absolute;
  font-family: "Lato", sans-serif;
  left: 3.57%;
  right: 54.46%;
  top: 80.18%;
  bottom: 14.23%;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
  /* or 14px */

  color: ${props => props.theme.colors.cyan};
`;
const CardImage = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 56.21%;
  background-size: cover;
  background-image: url("image_band.png");
  background-position: center;
  border-radius: 13px 13px 0px 0px;
`;

const CardTitle = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  left: 3.57%;
  right: 31.7%;
  top: 48.98%;
  bottom: 45.12%;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${props => props.theme.colors.yellow};
`;

const CardDetail = styled.div`
  position: absolute;
  font-family: "Lato", sans-serif;
  left: 3.57%;
  right: 4.91%;
  top: 55.9%;
  bottom: 30.44%;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
  /* or 14px */

  color: #c4c4c4;
`;
