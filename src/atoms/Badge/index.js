import React from "react";
import { Badge } from "@mui/material";
function Badges(props) {
  const {
    color,
    overlap,
    imgClass,
    className,
    variant,
    src,
    alt,
    BadgeContent,
    text,
  } = props;
  return (
    <div>
      <Badge
        color={color}
        overlap={overlap}
        badgeContent={BadgeContent}
        variant={variant}
        className={className}
      >
        <img src={src} className={imgClass} alt={alt}>
          {text}{" "}
        </img>
      </Badge>
    </div>
  );
}

Badges.defaultProps = {
  color: "Primary",
  overlap: "",
  BadgeContent: "",
  variant: "dot",
  className: "",
  imgClass: "w-16 h-16",
};

export default Badges;
