import React, { useState } from "react";
import Proptype from "prop-types";
import { Menu, MenuItem, Fade, IconButton } from "@mui/material";
function Dropdown(props) {
  const { options, itemsClasses, icons, className } = props;
  const [anchorEl, setAnchoneEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = (e) => {
    console.log(e);
  };

  return (
    <div>
      <IconButton aria-label="more" aria-controls="long-enu">
        {icons}
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted={false}
        open={open}
        onClose={() => handleClose(() => {})}
        TransitionComponent={Fade}
      >
        {options?.map((k, v) => {
          <MenuItem
            classes={itemsClasses}
            key={k}
            value={k.value}
            onClick={(v) => handleClose(v.func ? v.func : () => {})}
          >
            {v.name}
          </MenuItem>;
        })}
      </Menu>
    </div>
  );
}

Dropdown.proptotype = {
  id: Proptype.string,
  janndleClose: Proptype.func,
};

export default Dropdown;
