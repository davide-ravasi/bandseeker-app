import styled, { css } from "styled-components";

export default function Input({
  type,
  name,
  value,
  placeholder,
  kind,
  onChange,
  children,
}) {
  return kind === "select" ? (
    <StyledSelect
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    >
      {" "}
      {children}
    </StyledSelect>
  ) : kind === "textarea" ? (
    <StyledTextarea
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  ) : (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
}

const styles = css`
  font-family: "Lato", sans-serif;

  width: 330px;
  min-height: 48px;
  padding: 10px;
  color: ${(props) => props.theme.colors.mediumgrey};
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 15px;

  &:focus {
    box-shadow: 0 0 0 0.2rem #b9abe0;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.mediumgrey};
    font-weight: 100;
    font-size: 1rem;
  }
`;

const StyledSelect = styled.select`
  ${styles}
`;
const StyledInput = styled.input`
  ${styles}
`;
const StyledTextarea = styled.textarea`
  ${styles} min-height: 100px;
`;
