import React, { useState } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import styled from "styled-components";
//import { StyledSelect } from "../searchsection/input";

import { withApollo } from "../../lib/apollo";
import { useQuery, useMutation, gql } from "@apollo/client";
import { convertToArray } from "../../outils";
import { ManageBandSectionProps } from "../../types";
import NEW_BAND from "../../graphql/mutations/newBand";
//import Select from "react-select";
//import GET_LIST from "../../graphql/queries/getList";
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
} from "../../styles/main.styles";

function NewBandSection(props: ManageBandSectionProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [foundation_date, setFoundation_date] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [genres, setGenres] = useState<string>("");
  // const [genresList, setGenresList] = useState<string>("");
  const [searching, setSearching] = useState<string>("");

  const [hasUpdated, setHasUpdated] = useState<string>("SUBMIT");
  // const [selectedOption, setSelectedOption] = useState(null);

  const [newBand] = useMutation(NEW_BAND);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  // const { loading, error, data } = useQuery(GET_LIST, {
  //   variables: { what: "genre" },
  //   onCompleted: (data) => {
  //     const formattedList = data.getList.reduce((acc, el: string) => {
  //       return (acc = [...acc, { value: el.name, label: el.name }]);
  //     }, []);

  //     setGenresList(formattedList);
  //   },
  // });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("submit");

    console.log("genres: ", genres);

    //const genresArray = genres.reduce((acc, el) => [...acc, el.name], []);
    //console.log("genresArray: ", genresArray);
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
          searching: searchingArray,
        },
      },
    });
    setHasUpdated("SUBMITTED!!");
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
            {/* <Select
              defaultValue={"select one or more genres"}
              isMulti={true}
              placeholder="Select your genre(s)"
              onChange={(value) => {
                console.log("value: ", value);
                setGenres(value);
                //setHasUpdated("SUBMIT");
              }}
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: "330px",
                  color: "#303036",
                  background: "white",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  border: "2px solid rgb(118, 118, 118)",
                  textAlign: "left",
                }),
                input: (provided) => ({
                  ...provided,
                  border: "none",
                  fontFamily: "Lato, sans-serif",
                }),
                control: (provided) => ({
                  ...provided,
                  border: "none",
                }),
                option: (provided) => ({
                  ...provided,
                  fontFamily: "Lato, sans-serif",
                }),
                multiValue: (provided) => ({
                  ...provided,
                  fontFamily: "Lato, sans-serif",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  fontFamily: "Lato, sans-serif",
                }),
              }}
              options={genresList}
            /> */}
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
