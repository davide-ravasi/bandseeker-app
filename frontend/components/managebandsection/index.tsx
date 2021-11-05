import React, { useState } from "react";
import Button from "../searchsection/button";
import Input from "../searchsection/input";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

import { withApollo } from "../../lib/apollo";
import { useQuery, useMutation, gql } from "@apollo/client";

const ADD_BAND_PROFILE = gql`
  mutation AddBandProfile(
    $name: String!
    $genre: String!
    $location: String!
    $description: String!
  ) {
    addBandProfile {
      name
      description
      location
      foundation_date
    }
  }
`;

function ManageBandSection() {
  const { value: valueName, bind: bindName, reset: resetName } = useInput("");
  const {
    value: valueDescription,
    bind: bindDescription,
    reset: resetDescription,
  } = useInput("");
  const {
    value: valueLocation,
    bind: bindLocation,
    reset: resetLocation,
  } = useInput("");
  const {
    value: valueFoundation,
    bind: bindFoundation,
    reset: resetFoundation,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    console.log("value to send valueName", valueName);
    resetName();
    console.log("value to send valueDescription", valueDescription);
    resetDescription();
    console.log("value to send valueLocation", valueLocation);
    resetLocation();
    console.log("value to send", valueFoundation);
    resetFoundation();
    addBandProfile();
  };

  const [addBandProfile, { data, loading, error }] =
    useMutation(ADD_BAND_PROFILE);

  return (
    <Container>
      <FormContainer>
        <SearchFormTitle>BAND PROFILE</SearchFormTitle>
        <SearchFormDetail>
          Add or modify the informations about your band
        </SearchFormDetail>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input type="text" placeholder="Name" kind="input" {...bindName} />
            <Input
              type="textarea"
              placeholder="Description"
              kind="textarea"
              {...bindDescription}
            />
            <Input
              type="text"
              placeholder="Location"
              kind="input"
              {...bindLocation}
            />
            <Input
              type="text"
              placeholder="Foundation date"
              kind="input"
              {...bindFoundation}
            />
          </InputContainer>
          <ButtonContainer>
            <Button type="submit" content="SUBMIT" />
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
}

export default withApollo(ManageBandSection);

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
