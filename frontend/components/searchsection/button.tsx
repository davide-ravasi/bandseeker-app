import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #e4e752;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  position: absolute;
  width: 330px;
  height: 48px;

  border-radius: 5px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border: none;
  color: black;

  cursor: pointer;
`;
