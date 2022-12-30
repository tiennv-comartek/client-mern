import React from "react";
import { Typography } from "@material-ui/core";
import useStyle from "./style";

function Header() {
  return (
    <Typography variant="h4" align="center" className={useStyle().container}>
      Blog
    </Typography>
  );
}

export default Header;
