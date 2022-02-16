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
  height: 25px;
  width: 100%;

  margin-left: 0px;

  font-family: Advent Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 82.03%;

  margin-top: 50px;
  align-items: start;

  color: #757780;
`;

export const SectionContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
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
