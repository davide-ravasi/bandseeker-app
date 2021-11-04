import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PhotoCard = () => {
  return (
    <PhotoContainer>
      <Photo />
      <Image
        src="/images/band_photo_1.png"
        alt="Picture of the band"
        layout="responsive"
        objectFit="cover"
        width={204}
        height={129}
      />
      <CloseButton>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
    </PhotoContainer>
  );
};

const PhotoContainer = styled.div`
  flex: 0 1 23%;
  margin-right: 2%;
  min-height: 50px;
  position: relative;
  margin-bottom: 2%;
  margin-top: 15px;
  border: 2px solid ${props => props.theme.colors.lightgrey}
`;

const CloseButton = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5%;
  top: 5%;
  border-radius: 50%;
  background: ${props => props.theme.colors.red};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;

const Photo = styled.div``;
