import React, { useState } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import { useQuery, useMutation } from "@apollo/client";
import { convertToArray, convertToString } from "../../outils";
import { ManageBandSectionProps } from "../../types";
import GET_BAND from "../../graphql/queries/getBand";
import UPDATE_BAND from "../../graphql/mutations/updateBand";
import Select from "react-select";
import GET_LIST from "../../graphql/queries/getList";
import {
  Container,
  FormContainer,
  SearchFormTitle,
  SearchFormDetail,
  ButtonContainer,
  InputContainer,
} from "./styles";

function ManageBandSection(props: ManageBandSectionProps) {
  const { loading, error, data } = useQuery(GET_BAND, {
    variables: { id: props.id },
    onCompleted: (data) => {
      // const genresString = data.getBand.genres.length
      //   ? convertToString(data.getBand.genres)
      //   : "";

      const genresString = data.getBand.genres.reduce((acc, el: string) => {
        return (acc = [...acc, { value: el.name, label: el.name }]);
      }, []);

      const searchingString = data.getBand.searching.length
        ? convertToString(data.getBand.searching)
        : "";
      setName(data.getBand.name);
      setDescription(data.getBand.description);
      setLocation(data.getBand.location);
      setFoundation_date(data.getBand.foundation_date);
      setEmail(data.getBand.email);
      setAvatarUrl(data.getBand.avatar.url);
      setGenres(genresString);
      setSearching(searchingString);
    },
  });
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [foundation_date, setFoundation_date] = useState<string>("");
  const [genres, setGenres] = useState<string>("");
  const [searching, setSearching] = useState<string>("");
  const [genresList, setGenresList] = useState<string>("");

  const dateFormatted = new Date(
    parseInt(foundation_date)
  ).toLocaleDateString();
  const [email, setEmail] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const [hasUpdated, setHasUpdated] = useState<string>("SUBMIT");

  const [updateBand] = useMutation(UPDATE_BAND);

  const {
    loading: loadingList,
    error: errorList,
    data: dataList,
  } = useQuery(GET_LIST, {
    variables: { what: "genre" },
    onCompleted: (data) => {
      const formattedList = data.getList.reduce((acc, el: string) => {
        return (acc = [...acc, { value: el.name, label: el.name }]);
      }, []);

      setGenresList(formattedList);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // const convertedGenres = convertToArray(genres);
    const genresArray = genres.reduce(
      (acc, el) => [...acc, { name: el.value }],
      []
    );
    const searchingArray = convertToArray(searching);

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
          genres: genresArray,
          searching: searchingArray,
        },
      },
    });
    setHasUpdated("UPDATED!");
  };

  console.log(genres);

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
            {/* <Input
              type="text"
              placeholder="Genres comma separated. Ex. rock, blues"
              kind="input"
              value={genres}
              onChange={(e) => {
                console.log(e.target.value);
                setGenres(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            /> */}
            {genres && (
              <Select
                defaultValue={genres}
                isMulti={true}
                placeholder="Select your genre(s)"
                onChange={(value) => {
                  setGenres(value);
                  setHasUpdated("SUBMIT");
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
              />
            )}
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

export default ManageBandSection;
