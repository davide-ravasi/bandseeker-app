import styled from "styled-components";

export const FooterWrapper = styled.div`
  color: #cccccc;
  background: #4c4b63;
`;

export const Nav = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  margin: 30px auto 0;
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  text-align: center;

  ul {
    list-style-type: none;
    li {
      display: inline-block;
      a:hover {
        filter: brightness(80%);
      }
    }
  }
`;
