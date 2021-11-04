import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Link href="/">
          <Logo href="">Bandseeker</Logo>
        </Link>

        <Menu isOpen={isOpen}>
          <Link href="/admin">
            <MenuLink>ADMIN</MenuLink>
          </Link>
          <MenuLink href="">ABOUT</MenuLink>

          <MenuLink href="">CONTACTS</MenuLink>
          <MenuLink href="">Login</MenuLink>

          <MenuLink href="">Sign Up</MenuLink>
        </Menu>
      </Container>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 63px;
  background: #4c4b63;
`;

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const Logo = styled.a`
  position: relative;
  color: #30bced;
  text-decoration: none;
  font-weight: 400;
  font-size: 36px;
  height: 43px;
  size: 36px;
  width: 188px;

  /* span {
    @import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100&display=swap");
    font-family: "Advent Pro";
    font-weight: 300;
    font-size: 1.3rem;
  } */
`;

const Menu = styled.div`
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

const MenuLink = styled.a`
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
