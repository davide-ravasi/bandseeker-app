import React, { useState } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import styled from "styled-components";
import { useQuery, useMutation, gql } from "@apollo/client";

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

const UPDATE_BAND = gql`
  mutation UpdateBand($id: ID!, $BandUpdateInput: BandUpdateInput) {
    updateBand(id: $id, input: $BandUpdateInput) {
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
        url
      }
      avatar {
        name
        url
      }
    }
  }
`;

const convertToArray = (string) => {
  console.log("string", string);
  const stringToArray = string.split(",");
  console.log("stringToArray", stringToArray);

  return stringToArray.map(el => { return { name: el } });
}

const convertToString = (array) => {
  if (typeof array === 'undefined') return false;
  console.log(array);
  const planArray = array.map(el => el.name);
  console.log("planArray", planArray);

  return planArray.join(",");
}

function ManageBandSection(props) {
  const { loading, error, data } = useQuery(GET_BAND, {
    variables: { id: props.id },
    onCompleted: (data) => {
      const genresString = data.getBand.genres.length ? convertToString(data.getBand.genres) : "";
      setName(data.getBand.name);
      setDescription(data.getBand.description);
      setLocation(data.getBand.location);
      setFoundation_date(data.getBand.foundation_date);
      setEmail(data.getBand.email);
      setAvatarUrl(data.getBand.avatar.url);
      setGenres(genresString);
    },
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [foundation_date, setFoundation_date] = useState("");
  const [genres, setGenres] = useState("");
  const dateFormatted = new Date(
    parseInt(foundation_date)
  ).toLocaleDateString();
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [hasUpdated, setHasUpdated] = useState("SUBMIT");

  const [updateBand] = useMutation(UPDATE_BAND);

  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedGenres = convertToArray(genres);
    console.log("convertedgenres  ", convertedGenres);

    updateBand({
      variables: {
        id: props.id,
        BandUpdateInput: {
          name: name,
          location: location,
          description: description,
          foundation_date: foundation_date,
          email: email,
          avatar: { url: avatarUrl },
          genres: convertedGenres
        },
      },
    });
    setHasUpdated("UPDATED!");
  };

  return (
    <Container>
      <FormContainer>
        <SearchFormTitle>BAND PROFILE</SearchFormTitle>
        <SearchFormDetail>
          Add or modify the informations about your band
        </SearchFormDetail>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="text"
              placeholder="Name xxx"
              kind="input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="textarea"
              placeholder="Description"
              kind="textarea"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Location"
              kind="input"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Foundation date"
              kind="input"
              value={dateFormatted}
              onChange={(e) => {
                setFoundation_date(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Email"
              kind="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="textarea"
              placeholder="Avatar Address"
              kind="textarea"
              value={avatarUrl}
              onChange={(e) => {
                setAvatarUrl(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Genres comma separated. Ex. rock, blues"
              kind="input"
              value={genres}
              onChange={(e) => {
                console.log(e.target.value);
                setGenres(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
          </InputContainer>
          <ButtonContainer>
            <Button type="submit" content={hasUpdated} />
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
}

export default ManageBandSection;

const Container = styled.div`
  position: relative;
`;

const FormContainer = styled.div`
  position: relative;
  width: 624px;
  margin-left: auto;
  margin-right: auto;

  background: rgba(255, 255, 252, 0.26);
  padding: 0 0 1px;
  align-items: center;
  text-align: center;
`;

const SearchFormTitle = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 40px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 82.03%;

  color: #e4e752;
`;

const SearchFormDetail = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 10px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140.62%;
  text-align: center;

  color: #fffffc;
`;

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px 6px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
