import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setinput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").doc().set({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setinput("");
  };
  const [{ user }] = useStateValue();

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message  ${channelName}`}
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
        {console.log(channelId)}
      </form>
    </div>
  );
}

export default ChatInput;
