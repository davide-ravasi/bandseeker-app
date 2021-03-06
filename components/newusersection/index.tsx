import React, { useState, useEffect, InputHTMLAttributes } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import styled from "styled-components";

import { withApollo } from "../../lib/apollo";
import { useMutation, gql } from "@apollo/client";
import { convertToArray } from "../../outils";
import NEW_USER from '../../graphql/mutations/newUser';

export function NewUserSection() {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birth_date, setBirth_date] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [genres, setGenres] = useState<string>("");
  const [instruments, setInstruments] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const [hasUpdated, setHasUpdated] = useState("SUBMIT");

  const [newUser] = useMutation(NEW_USER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const genresArray = convertToArray(genres);
    const instrumentsArray = convertToArray(instruments);

    newUser({
      variables: {
        UserCreateInput: {
          name: name,
          nickname: nickname,
          email: email,
          birth_date: birth_date,
          description: description,
          genres: genresArray,
          instruments: instrumentsArray,
          avatar: { url: avatarUrl },
        },
      },
    });
    setHasUpdated("SUBMITTED!!");
  };

  return (
    <Container>
      <FormContainer>
        <SearchFormTitle>MUSICIAN PROFILE</SearchFormTitle>
        <SearchFormDetail>
          Add or modify the informations about you
        </SearchFormDetail>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="text"
              placeholder="Name"
              kind="input"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Nickname"
              kind="input"
              onChange={(e) => {
                setNickname(e.target.value);
                setHasUpdated("SUBMIT");
              }}
              value={nickname}
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
              type="text"
              placeholder="Birth Date"
              kind="input"
              value={birth_date}
              onChange={(e) => {
                setBirth_date(e.target.value);
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
              placeholder="Genres comma separated Ex. blues,jazz"
              kind="input"
              value={genres}
              onChange={(e) => {
                setGenres(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="text"
              placeholder="Instruments comma separated Ex. guitar,vocals"
              kind="input"
              value={instruments}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                setInstruments(e.target.value);
                setHasUpdated("SUBMIT");
              }}
            />
            <Input
              type="textarea"
              placeholder="Avatar Address"
              kind="textarea"
              value={avatarUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAvatarUrl(e.target.value);
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

export default withApollo(NewUserSection);

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
