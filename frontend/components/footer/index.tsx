import React, { useState } from "react";
import styled from "styled-components";

export const Footer = () => {
  return <Nav>© 2010 — 2020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy — Terms</Nav>;
};

const Nav = styled.div`
  position: relative;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #cccccc;
  padding: 0 15rem;

  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 53px;
  background: #4c4b63;

  justify-content: center;
  text-align: center;
`;
