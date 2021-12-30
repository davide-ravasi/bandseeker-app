import type { NextPage } from "next";
import { useState } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

import { ManagePhotos } from "../../components/managephotos";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/layout";

const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      nickname
      description
      email
      genres {
        name
      }
      birth_date
      address
      instruments {
        name
      }
      avatar {
        url
      }
    }
  }
`;

type Genre = {
  name: String
}

type Instrument = {
  name: String
}


const UserPage: NextPage = ({ router: query }) => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
    onCompleted: (data) => {
      console.log(data);
      setName(data.getUser.name);
      setNickname(data.getUser.nickname);
      setImage(data.getUser.avatar.url);
      setBirthdate(data)
      setAddress(data.getUser.address);
      setDescription(data.getUser.description);
      setEmail(data.getUser.email);
      setGenres(data.getUser.genres);
      setInstruments(data.getUser.instruments);
    },
  });
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [instruments, setInstruments] = useState<Array<Instrument>>([]);

  const dateFormatted = new Date(
    parseInt(birthdate)
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
          <SectionSubtitle>
            Nickname: {nickname}
          </SectionSubtitle>
          <SectionDescription>{description}</SectionDescription>
          <SectionInfos>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address:{" "}
            </span>
            {address}
          </SectionInfos>
          <SectionInfos>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> Birth date:{" "}
            </span>
            {dateFormatted}
          </SectionInfos>
          <SectionInfos>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> Contacts:{" "}
            </span>
            {email}
          </SectionInfos>
          <SectionInfos>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> Instruments:{" "}
            </span>
            {instruments?.length && instruments.map(instrument => instrument.name)}
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
const SectionSubtitle = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.cyan};
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

export default withApollo(UserPage);
