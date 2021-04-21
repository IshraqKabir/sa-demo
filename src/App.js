import React from "react";
import { Box, Button, withStyles } from "@material-ui/core";

export default function MyApp(props) {
  return (
    <TopbarContainer>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
      <NavItem>Home</NavItem>
    </TopbarContainer>
  );
}

const TopbarContainer = withStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "blue",
    display: "flex",
    ["@media (max-width: 600px)"]: {
      backgroundColor: "red",
    },
  },
})(Box);

const NavItem = withStyles({
  root: {
    color: "white",
    margin: "1rem 3rem",
  },
})(Box);
