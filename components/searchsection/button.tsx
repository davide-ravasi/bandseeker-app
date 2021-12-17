import styled from "styled-components";

type ButtonProps = {
  type?: string,
  content: string
}

export default function Button(props: ButtonProps) {
  const { content } = props;
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #e4e752;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  width: 330px;
  height: 48px;

  border-radius: 5px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border: none;
  color: black;

  cursor: pointer;
`;
