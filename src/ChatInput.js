import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import "./ChatInput.css";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from "react-redux";



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
  
const user = useSelector(state => state.user)
  return (
    <div className="chatInput__container">
    <div className="chatInput">
      <form>
        <input
          placeholder={`Send a message to #${channelName}`}
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
      {console.log(channelId)}
      </form>
    </div>
    <div className="chatModify_Icons">
     
     <div className="chatModify_Icons__right">
     <FlashOnIcon/>
     <FormatBoldIcon/>
     <FormatItalicIcon/>
     <StrikethroughSIcon/>
     <CodeIcon/>
     <LinkIcon/>
     <i class="fas fa-list"/>
     </div>
    
<div className="chatModify_Icons__left">
<i class="far fa-at"></i>
<EmojiEmotionsIcon/>
<AttachFileIcon/>
<Button type="submit"  className="send" onClick={sendMessage}>
  <SendIcon/>
  </Button>

</div>
    </div>
    </div>
  );
}

export default ChatInput;
