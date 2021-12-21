import React, { useState } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import styled from "styled-components";

import { withApollo } from "../../lib/apollo";
import { useQuery, useMutation, gql } from "@apollo/client";
import { convertToArray } from "../../outils";
import { ManageBandSectionProps } from "../../types";

const NEW_BAND = gql`
  mutation NewBand($BandCreateInput: BandCreateInput) {
    newBand(input: $BandCreateInput) {
      name
      description
      location
      foundation_date
      email
      genres {
        name
      }
      searching {
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

function NewBandSection(props: ManageBandSectionProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [foundation_date, setFoundation_date] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [genres, setGenres] = useState<string>("");
  const [searching, setSearching] = useState<string>("");

  const [hasUpdated, setHasUpdated] = useState<string>("SUBMIT");

  const [newBand] = useMutation(NEW_BAND);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const genresArray = convertToArray(genres);
    const searchingArray = convertToArray(searching);

    newBand({
      variables: {
        BandCreateInput: {
          name: name,
          description: description,
          location: location,
          foundation_date: foundation_date,
          email: email,
          avatar: { url: avatarUrl },
          genres: genresArray,
          searching: searchingArray
        },
      },
    });
    setHasUpdated("SUBMITTED!!");
  };

  // const convertToArray = (string) => {
  //   const stringToArray = string.split(",");

  //   return stringToArray.map(el => { return { 'name': el } });
  // }

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
              placeholder="Name"
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
              value={foundation_date}
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
              placeholder="Genres (add list comma separated)"
              kind="input"
              value={genres}
              onChange={(e) => {
                setGenres(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Searching (add list comma separated)"
              kind="input"
              value={searching}
              onChange={(e) => {
                setSearching(e.target.value);
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

export default withApollo(NewBandSection);

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
