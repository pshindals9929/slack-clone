import React from "react";
import "./messages.css";
import {useRef,useEffect } from "react"

function Messages({ message, timestamp, user, userId, userImage }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [message]);

  return (
    <div  className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user}

          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
