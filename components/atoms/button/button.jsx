import React from "react";
import { func, node, string } from "prop-types";
import StyledButton, { StyledLinkButton } from "./button.styles";

const Button = ({ children, href, onClick }) => {
    if (!href) return <StyledButton onClick={onClick}>{children}</StyledButton>;
    return <StyledLinkButton href={href}>{children}</StyledLinkButton>;
};
Button.propTypes = {
    children: node.isRequired,
    href: string,
    onClick: func
};

export default Button;
