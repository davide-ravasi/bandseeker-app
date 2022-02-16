import React, { useState } from "react";
import Link from "next/link";
import { FooterWrapper, Nav } from "./styles";
import { MenuLink } from "../header/styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Nav>
        <div>© {new Date().getFullYear()}</div>
        <ul>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </Nav>
    </FooterWrapper>
  );
};
