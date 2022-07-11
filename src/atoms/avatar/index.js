import React from "react";
import Avatar from "@mui/material";
import Proptypes from "prop-types";
function Avatar(props) {
  return (
    <div>
      <AvatarAtom alt={props.alt} {...props}>
        {" "}
        {props.value}
      </AvatarAtom>
    </div>
  );
}
AvatarAtom.defaultProps = {
  variant: "cicle",
  classes: () => {},
};
AvatarAtom.propType = {
  variant: Proptypes.onOf(["rounded", "cirular", "circle"]),
  src: Proptypes.string,
  sizes: Proptypes.string,
  alt: Proptypes.string,
};
export default Avatar;
