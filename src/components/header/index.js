import React from "react";
import { Link as ReactRoterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/header";
import PropTypes from "prop-types";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRoterLink to={to}>
      <Logo {...restProps} />
    </ReactRoterLink>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.node,
};

Header.Frame.propTypes = {
  children: PropTypes.node,
};

Header.ButtonLink.propTypes = {
  children: PropTypes.node,
};

Header.Logo.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
};
