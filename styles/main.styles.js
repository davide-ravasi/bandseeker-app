import styled from "styled-components";

// export const Container =
//   styled.div <
//   { isBlock: boolean | undefined } >
//   `
//   position: relative;
//   display: ${(props) => (props.isBlock ? "block" : "flex")};
//   justify-content: flex-start;

//   max-width: 1100px;
//   min-height: calc(100vh - 180px);
//   margin: 30px auto;
// `;

export const SectionTitle = styled.h1`
  position: relative;
  width: 100%;

  margin-left: 0px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 34px;

  margin-top: 50px;
  align-items: start;

  color: #757780;
`;

export const SectionContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  width: 100%;
  margin-bottom: 10px;
`;

export const SimpleText = styled.p`
  font-family: Lato, sans-serif;
  color: #fff;

  a {
    color: ${(props) => props.theme.colors.yellow};

    &:hover {
      color: ${(props) => props.theme.colors.lightgrey};
    }
  }
`;

export const FormContainer = styled.form`
  position: relative;
  max-width: 624px;
  margin-left: auto;
  margin-right: auto;

  background: rgba(255, 255, 252, 0.26);
  padding: 0 0 1rem;
  align-items: center;
  text-align: center;
`;
