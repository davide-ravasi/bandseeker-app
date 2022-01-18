import React, { useState } from "react";
import { useRouter } from 'next/router'
import styled from "styled-components";
import Button from "./button";
import Input from "./input";

export const SearchSection = () => {
  const [searchType, setSearchType] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push({
      pathname: '/list/pagelist',
      query: {
        type: 'search',
        searchType,
        searchBy,
        searchQuery
      },
    })
  }

  return (
    <div>
      <Container>
        <FormContainer onSubmit={(e) => search(e)}>
          <SearchFormTitle>FIND YOUR MEMBER</SearchFormTitle>
          <SearchFormDetail>
            Search Thousands of Musicians and Bands:
          </SearchFormDetail>
          <InputContainer>
            <Input name="searchtype" id="searchtype" kind="select" value={searchType} onChange={(e) => { setSearchType(e.target.value) }}>
              <option value="">Who are you looking for? </option>
              <option value="band">Band</option>
              <option value="member">Member</option>
            </Input>
            <Input name="searchby" id="searchby" kind="select" value={searchBy} onChange={(e) => { setSearchBy(e.target.value) }}>
              <option value="">Search by.... </option>
              <option value="content">Content</option>
              <option value="genre">Genre</option>
            </Input>
            <Input type="Search" name="search" id="search" placeholder="Search term...." kind="input" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
          </InputContainer>
          <ButtonContainer>
            <Button content="SUBMIT" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
};
const Container = styled.div`
  position: relative;
  background-image: url("background2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  /* width: 100%;
  height: 100vh;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  max-width: 100%;
 */
`;

const FormContainer = styled.form`
  position: relative;
  width: 624px;
  height: 410px;
  /* width: 30%;
  height: 30%;
  top: 74px;
  left: 35%;
  right: 35%; */
  margin-left: auto;
  margin-right: auto;

  background: rgba(255, 255, 252, 0.26);
  padding: 0rem;
  align-items: center;
  text-align: center;
`;

const SearchFormTitle = styled.a`
  position: relative;
  /* width: 787px;
  height: 40px; */
  /* left: calc(50% - 87px / 2 + 0.5px);
  top: 123px; */
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 82.03%;
  /* identical to box height, or 39px */

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
  /* or 28px */
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

const SubmmitButton = styled.a``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
