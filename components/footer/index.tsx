import React, { useState } from "react";
import Link from "next/link";
import { Nav } from './styles';
import Layout from "../layout";
import { MenuLink } from "../header/styles";

export const Footer = () => {
  return (
    <Layout isBlock={true}>
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
    </Layout>
  );
};


