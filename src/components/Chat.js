import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "../firebase";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import getmessage from "../redux/actions/message"


function Chat() {
  const { roomId } = useParams();
  const [roomsDetails, setroomsDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);
  //const dispatch = useDispatch(getmessage());
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomsDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setroomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages);
  return (
    <div className="Chat">
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat__channelName">
            <strong>#{roomsDetails?.name} </strong>
            <StarBorderIcon />
          </h4>
        </div>

        <div className="chat__headerright">
          <p>
            <InfoIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, user, userImage, timestamp, userId }) => (
          <Messages
            message={message}
            user={user}
            userImage={userImage}
            timestamp={timestamp}
            userId={userId}
          />
        ))}
      </div>
      {console.log(roomId)}
      <ChatInput channelName={roomsDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
