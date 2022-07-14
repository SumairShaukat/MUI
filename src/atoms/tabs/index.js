import React from "react";
import { Tabs as TabsItem } from "@mui/material";
import Proptype from "prop-types";

function Tabs(props) {
  return (
    <div>
      <TabsItem {...props}>{props.children}</TabsItem>
    </div>
  );
}

Tabs.PropType = {
  onChange: Proptype.func,
  classes: Proptype.object,
  textColor: Proptype.oneOf(["inherit", "secondary", "primary"]),
  variant: Proptype.oneOf(["fullWidth", "scrollable", "standard"]),
  value: Proptype.any,
  centered: Proptype.bool,
};

export default Tabs;
