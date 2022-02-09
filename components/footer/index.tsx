import React, { useState } from "react";
import { Nav } from './styles';

export const Footer = () => {
  return <Nav>© {new Date().getFullYear()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy — Terms</Nav>;
};


