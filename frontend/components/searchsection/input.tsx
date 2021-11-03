import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato", sans-serif;

  width: 330px;
  height: 48px;
  position: absolute;
  color: #e5e5e5;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  s &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
