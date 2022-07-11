import React from "react";
import { Button as ButtonAtom } from "@mui/material";
import Proptype from "prop-types";

function Button() {
  return (
    <div>
      <ButtonAtom variant="contained">Click ME</ButtonAtom>
    </div>
  );
}
Button.defaultProps = {
  color: "default",
  size: "medium",
  variant: "text",
  loading: false,
  classes: {},
};

Button.prototype = {
  color: Proptype.oneOf(["default", "inherit", "primary"]),
  disabled: Proptype.bool,
  href: Proptype.string,
  size: Proptype.oneOf(["large", "medium", "small"]),
  variant: Proptype.oneOf(["contained", "outlined", "text"]),
  classes: Proptype.object,
  value: Proptype.string,
  iconStart: Proptype.node,
  iconEnd: Proptype.node,
  loading: Proptype.bool,
};
export default Button;
