import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  faAngleRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementCardProps } from "../../types";
import TagList from "../taglist";
import { useRouter } from "next/router";

export const ElementCard = ({ element }: ElementCardProps) => {
  const pagePath = element.searching ? '/band' : '/user';
  const router = useRouter();

  const search = async (searchQuery: string, searchBy: string) => {

    router.push({
      pathname: '/list/pagelist',
      query: {
        type: 'search',
        searchType: pagePath.substring(1),
        searchBy: searchBy || "genre",
        searchQuery
      },
    })
  }

  return (
    <CardContainer>
      <CardImage imageUrl={element.avatar.url} />
      <GenresWrapper>
        {element.genres && <TagList tags={element.genres} cb={search} />}
      </GenresWrapper>
      <Link
        href={{
          pathname: pagePath,
          query: { id: element.id },
        }}
        as={`${pagePath}/${element.name}`}
        passHref
      >
        <ArrowButton>
          <FontAwesomeIcon icon={faAngleRight} />
        </ArrowButton>
      </Link>
      <CardTitle>{element.name}</CardTitle>
      <CardDetail>
        {element.description && element.description.substring(0, 100)}...
      </CardDetail>
      <Location>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {element.location}
      </Location>

      {element.searching && <TagList title={'SEARCHING: '} tags={element.searching} searchBy="searching" cb={search} />}

      {element.instruments && <TagList title={'INSTRUMENTS: '} tags={element.instruments} searchBy="instruments" cb={search} />}

    </CardContainer >
  );
};

const globalMargin = '8px';

const CardContainer = styled.div`
  width: 224px;
  height: 343px;
  position: relative;
  background: linear-gradient(180deg, #757780 0%, #242527 100%);
  border-radius: 13px;
  margin-right: 30px;
  margin-top: 10px;
  padding-bottom: 15px;
`;

const ArrowButton = styled.div<{ theme: { colors: { cyan: string } } }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 8px;
  top: 35%;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;
  cursor: pointer;

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;

const GenresWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 2px;
  min-height: 30px;
`;

const Location = styled.div<{ theme: { colors: { cyan: string } } }>`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${globalMargin};

  color: #c4c4c4;

  & > svg {
    margin-right: 4px;
    color: ${(props) => props.theme.colors.cyan};
  }
`;

const CardImage = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 42%;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  border-radius: 13px 13px 0px 0px;
`;

const CardTitle = styled.div<{ theme: { colors: { yellow: string } } }>`
  font-family: "Lato", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  clear: both;
  margin: ${globalMargin};

  color: ${(props) => props.theme.colors.yellow};
`;

const CardDetail = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4c4c4;
  min-height: 48px;
  margin: ${globalMargin};
`;

