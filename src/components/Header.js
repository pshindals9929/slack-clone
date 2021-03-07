import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {logout} from "../redux/actions/auth";

Modal.setAppElement("#root");
function Header() {
  const user = useSelector((state) => state.user);
  const [isOpensSet, setisOpenSet] = useState(false);
  const dispatch = useDispatch(logout());
  return (
    <div className="header">
      <div className="header__Left"></div>

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
          onClick={() => {
            setisOpenSet(!isOpensSet);
          }}
        />
      </div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.0)",
          },
          content: {
            position: "absolute",
            top: "7%",
            left: "75%",
            right: "0.5%",
            bottom: "40%",
            border: "2px solid #ccc",
            background: "rgba(250,250,250, 1)",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={isOpensSet}
        onRequestClose={() => {
          setisOpenSet(false);
        }}
      >
        <div className="modal__header">
          <img src={user.photoURL} />
          <div className="user__name">
            <h4>{user.displayName}</h4>
            <p>
              <FiberManualRecordIcon />
              Active
            </p>
          </div>
        </div>
        <div className="modal__Options">
          <p>Set yourself as away</p>
          <p>Pause Notifications</p>
          <p>Edit Profile</p>
          <p>View Profile</p>
          <p>Preferences</p>
          <p onClick={() => dispatch(logout())}>Sign out</p>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
