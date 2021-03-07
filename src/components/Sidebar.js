import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import db from "../firebase";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sideBar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOptions Icon={InsertCommentIcon} title="Youtube" />
      <SidebarOptions Icon={InboxIcon} title="inbox" />
      <SidebarOptions Icon={DraftsIcon} title="Draft" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Bookmark" />
      <SidebarOptions Icon={PeopleAltIcon} title="People" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel" />

      <hr />
      {channels.map((channel) => (
        <SidebarOptions title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
