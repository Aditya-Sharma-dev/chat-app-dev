import React from "react";
import "../style/Chat.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ReactTimeAgo from "react-time-ago";

function Chat({ _id, name, isActive, description }) {
  return (
    <div className="chat_block">
      <div className="info">
        <div className="dp">
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className="name">
          <p>
            <b>{name} </b>
          </p>
        </div>
        {/* <p><ReactTimeAgo /></p> */}
      </div>
      <div className="message">
        <p> {description}</p>
      </div>
    </div>
  );
}

export default Chat;
