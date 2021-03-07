import React from "react";
import "./SidebarOptions.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";
function SidebarOptions({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addchannel = () => {
    const channelName = prompt("please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addchannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOptions;
