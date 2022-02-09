import React, { useState } from "react";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';
import { Nav, Container, Logo, Menu, MenuLink } from "./styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <Nav>
      <Container>
        <Link
          href={{
            pathname: "/",
            query: { type: "searchsection" },
          }}
          as={"/"}
          passHref
        >
          <Logo href="">Bandseeker</Logo>
        </Link>

        <Menu isOpen={isOpen}>
          {user && (
            <Link href="/admin" passHref>
              <MenuLink>ADMIN</MenuLink>
            </Link>
          )}
          <Link
            href={{
              pathname: "/statics",
              query: { type: "about-us" },
            }}
            as={"/about-us"}
            passHref
          >
            <MenuLink href="">ABOUT</MenuLink>
          </Link>
          <Link
            href={{
              pathname: "/statics",
              query: { type: "contacts" },
            }}
            as={"/contacts"}
            passHref
          >
            <MenuLink href="">CONTACTS</MenuLink>
          </Link>
          {!isLoading && !user && (
            <MenuLink href="/api/auth/login">
              LOGIN
            </MenuLink>
          )}
          {user && (
            <MenuLink href="/api/auth/logout">
              LOGOUT
            </MenuLink>
          )}
        </Menu>
      </Container>
    </Nav>
  );
};


