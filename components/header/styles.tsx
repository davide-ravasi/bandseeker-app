import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  width: 100vw;
  height: 63px;
  background: #4c4b63;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  display: flex;
  height: 63px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Logo = styled.a`
  position: relative;
  color: #30bced;
  text-decoration: none;
  font-weight: 400;
  font-size: 36px;
  width: 188px;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    clear: both;
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
