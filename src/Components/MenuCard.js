import { ChevronRightRounded } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

const MenuCard = ({imgSrc, name, isActive}) => {
    return(
        <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
        <div className="imgBox">
          <img src={imgSrc} alt="" />
        </div>
        <h3>{name}</h3>
        <i className="loadMenu">
          <ExpandMoreIcon />
        </i>
      </div>
    )
}

export default MenuCard