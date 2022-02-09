import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 63px;
  background: #4c4b63;
`;

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.a`
  position: relative;
  color: #30bced;
  text-decoration: none;
  font-weight: 400;
  font-size: 36px;
  height: 43px;
  size: 36px;
  width: 188px;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 30%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  font-family: "Lato", sans-serif;
  font-weight: normal;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
`;