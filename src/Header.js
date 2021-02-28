import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(state => state.user)
  return (
    <div className="header">
     <div className="header__Left">
      </div>

      <div className="header__middle">
      <AccessTimeIcon />
      <div className="header__serach">
       <input placeholder="serach" />
      </div>
      <HelpOutlineIcon />
      </div>
      <div className="header__right">
        <Avatar
          className="header__avator"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>


    </div>
  );
}

export default Header;
