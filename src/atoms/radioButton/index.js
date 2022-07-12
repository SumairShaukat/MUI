import React from "react";
import Proptype from "prop-types";
import Radio from "@mui/material/Radio";

function RadioButton(props) {
  return <Radio {...props} />;
}

RadioButton.defaultProps = {
  color: "primary",
  disabled: false,
  size: "medium",
  classes: () => {},
};

RadioButton.Proptype = {
  color: Proptype.oneOf(["primary", "default", "secondary"]),
  checked: Proptype.bool,
  disabled: Proptype.bool,
  size: Proptype.oneOf(["medium", "small"]),
  classes: Proptype.object,
};

export default RadioButton;
