import React from "react";

import {
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="images/logo.png" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/about">About Me</OptionLink>
        <OptionLink to="/portfolio">Portfolio</OptionLink>
        <OptionLink to="/resume">Resume</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
