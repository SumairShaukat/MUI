import React from "react";
import { Popover as PopoverAtom } from "@mui/material";
import Proptype from "prop-types";
function Popover(props) {
  return <PopoverAtom {...props}>{props.children}</PopoverAtom>;
}
Popover.defaultProps = {
  id: null,
  open: false,
  onClose: () => {},
  anchorEl: "",
};

Popover.Proptype = {
  id: Proptype.string,
  open: Proptype.bool,
  onCClose: Proptype.func,
  transformOrigin: Proptype.object,
  children: Proptype.node,
  anchorOrigin: Proptype.object,
  classes: Proptype.object,
  elevation: Proptype.number,
};

export default Popover;
