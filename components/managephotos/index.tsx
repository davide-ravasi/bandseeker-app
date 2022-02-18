import React from "react";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhotoCard } from "../photocard";
import { SectionContainer, SectionTitle } from "../../styles/main.styles";

export const ManagePhotos = ({ edit }) => {
  return (
    <div>
      <Container>
        {edit ? (
          <SectionTitle>
            MANAGE YOUR PHOTOS{" "}
            <PlusButton>
              <FontAwesomeIcon icon={faPlus} />
            </PlusButton>
          </SectionTitle>
        ) : (
          <SectionTitle>YOUR PHOTOS</SectionTitle>
        )}
        <SectionContainer>
          <PhotoCard edit={edit} />
          <PhotoCard edit={edit} />
          <PhotoCard edit={edit} />
          <PhotoCard edit={edit} />
          <PhotoCard edit={edit} />
          <PhotoCard edit={edit} />
        </SectionContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
`;

const PlusButton = styled.a`
  display: inline-block;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;
