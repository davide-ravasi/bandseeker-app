import React from "react";
import Link from "next/link";
import {
  faAngleRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementCardProps } from "../../types";
import TagList from "../taglist";
import { useRouter } from "next/router";
import {
  CardContainer,
  CardImage,
  GenresWrapper,
  ArrowButton,
  CardTitle,
  CardDetail,
  Location,
} from "./styles";

export const ElementCard = ({ element }: ElementCardProps) => {
  const pagePath = "searching" in element ? "/band" : "/user";
  const router = useRouter();

  const search = async (searchQuery: string, searchBy: string) => {
    router.push({
      pathname: "/list/pagelist",
      query: {
        type: "search",
        searchType: pagePath.substring(1),
        searchBy: searchBy || "genre",
        searchQuery,
      },
    });
  };

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
      {"location" in element && (
        <Location>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {element.location}
        </Location>
      )}

      {"searching" in element && (
        <TagList
          title={"SEARCHING: "}
          tags={element.searching}
          searchBy="searching"
          cb={search}
        />
      )}

      {"instruments" in element && (
        <TagList
          title={"INSTRUMENTS: "}
          tags={element.instruments}
          searchBy="instruments"
          cb={search}
        />
      )}
    </CardContainer>
  );
};
