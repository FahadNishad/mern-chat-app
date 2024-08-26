import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem
        omnis fugiat delectus! Cum eum esse quos eaque, consequuntur aperiam.
      </div>
    </Menu>
  );
};

export default FileMenu;
