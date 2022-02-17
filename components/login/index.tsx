import React from "react";
import styled from "styled-components";
import { FormContainer } from "../../styles/main.styles";
import Button from "./button";
import Input from "./input";

export const Login = () => {
  return (
    <div>
      <Container>
        <FormContainer>
          <SearchFormTitle>LOGIN</SearchFormTitle>
          <SearchFormDetail>Login to enter the admin section</SearchFormDetail>
          <InputContainer>
            <Input
              type="Email"
              name="email"
              placeholder="Search...."
              kind="input"
            />
            <Input
              type="Password"
              name="password"
              placeholder="Password"
              kind="input"
            />
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
