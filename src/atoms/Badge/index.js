import React from "react";
import { Badge } from "@mui/material";
function Badge() {
  return (
    <div>
      <Badge
        color={color}
        overlap={overlap}
        badgeContent={BadgeContent}
        variant={variant}
        className={className}
      >
        <img src={src} className={classNaem} alt={alt}>
          {text}{" "}
        </img>
      </Badge>
    </div>
  );
}

Badge.prototype = {
  color: "Primary",
  overlap: "",
  BadgeContent: "",
  variant: "dot",
  className: "",
  imgClass: "w-16 h-16",
};

export default Badge;
