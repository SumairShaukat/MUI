import React from "react";
import Proptypes from "prop-types";
import { Switch as Switches } from "@mui/material";

const SwitchAtom = (props) => {
  return <Switches {...props} />;
};

SwitchAtom.proptype = {
  required: Proptypes.bool,
  vale: Proptypes.any,
  onChange: Proptypes.func,
  checked: Proptypes.bool,
  classes: Proptypes.string,
  id: Proptypes.string,
  size: Proptypes.oneOf(["medium", "samll"]),
};
export default SwitchAtom;
