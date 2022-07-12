import React from "react";
import Proptype from "prop-types";
import { Typography } from "@mui/material";
function LabelAtom(props) {
  const { value } = props;
  return (
    <Typography>
      {props.styleName || ""}
      {value}
    </Typography>
  );
}
LabelAtom.defaultProps = {
  color: "textPrimary",
  align: "left",
  Paragraph: false,
  vairant: "inherit",
  classes: {},
  onclick: () => {},
};
LabelAtom.prototype = {
  onClick: Proptype.func,
  align: Proptype.oneOf(["inherit", "left", "center", "right"]),
  color: Proptype.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimar6y",
    "textSecondary",
    "error",
  ]),
  variant: Proptype.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
  ]),
  display: Proptype.oneOf(["intial", "block", "inline"]),
  paragraph: Proptype.bool,
  classes: Proptype.object,
};
export default LabelAtom;
