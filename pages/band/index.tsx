import type { NextPage } from "next";
import { useState } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import Image from "next/dist/client/image";

import { ManagePhotos } from "../../components/managephotos";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/layout";

const GET_BAND = gql`
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      name
      description
      location
      foundation_date
      email
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
      avatar {
        url
      }
    }
  }
`;

const ManageBand: NextPage = ({ router: query }) => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_BAND, {
    variables: { id: id },
    onCompleted: (data) => {
      console.log(data);
      setName(data.getBand.name);
      setImage(data.getBand.avatar.url);
      setDescription(data.getBand.description);
      setLocation(data.getBand.location);
      setFoundation_date(data.getBand.foundation_date);
      setEmail(data.getBand.email);
      setGenres(data.getBand.genres);
    },
  });
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [foundation_date, setFoundation_date] = useState("");
  const [email, setEmail] = useState("");
  const [genres, setGenres] = useState([]);

  const dateFormatted = new Date(
    parseInt(foundation_date)
  ).toLocaleDateString();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <HalfCol>
        <Avatar
          src={image}
          alt={name}
        />
      </HalfCol>
      <HalfCol>
        <SectionTitle>
          {name}
          {genres && genres.slice(0, 3).map((genre, index) => {
            return <Badge key={`${name}-${genre.name}-${index}`}>{genre.name}</Badge>
          })}
        </SectionTitle>
        <SectionDescription>{description}</SectionDescription>
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:{" "}
          </span>
          {location}
        </SectionInfos>
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faCalendar} /> Foundation date:{" "}
          </span>
          {dateFormatted}
        </SectionInfos>
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> Contacts:{" "}
          </span>
          {email}
        </SectionInfos>
      </HalfCol>
    </Layout>
  );
};

const HalfCol = styled.div`
  flex: 0 1 50%;
  &:last-child {
    padding-left: 20px;
  }
`;
const SectionTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.yellow};
`;
const Badge = styled.span`
  background: ${(props) => props.theme.colors.lightgrey};
  font-family: "Lato", sans-serif;
  color: ${(props) => props.theme.colors.darkgrey};

  font-size: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 2px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  margin-left: 8px;
  margin-top: 0;
`;
const SectionDescription = styled.p`
  margin: 15px 0;
  font-family: Lato;
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightgrey};
`;
const SectionInfos = styled.p`
  font-family: Lato;
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightgrey};

  & > span {
    color: ${(props) => props.theme.colors.cyan};
  }
`;
const Avatar = styled.img`
  width: 100%;
`;

export default withApollo(ManageBand);
