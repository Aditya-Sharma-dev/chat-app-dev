import React from "react";
import "../style/Chatview.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Chatview() {
  return (
    <div className="chatview">
      <div className="info">
        <div className="dp">
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className="name">
          <p>
            <b>Lorem </b>
          </p>
        </div>
      </div>
      <div className="data"></div>
    </div>
  );
}

export default Chatview;
