import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SmsIcon from "@mui/icons-material/Sms";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import "../style/Sidebar.css";
import Icon from "./Icon";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="photo">
          <AccountCircleIcon fontSize="large"/>
          <p><b>Henry</b></p>
        </div>
        </div>
        <div className="options">
          <div className="option">
            <Icon OptionIcon={GridViewIcon} />
            {/* <GridViewIcon fontSize="small" style={{marginTop: "2px"}}/>  */}
            <b> Home</b>
          </div>
          <div className="option">
          <Icon OptionIcon={SmsIcon} />
            <b>CHAT</b>
          </div>
          <div className="option">
            <Icon OptionIcon={PersonOutlineOutlinedIcon} />
            <b>Contact</b>
          </div>
          <div className="option">
            <Icon OptionIcon={NotificationsNoneOutlinedIcon} />
            <b>Notifications</b>
          </div>
          <div className="option">
            <Icon OptionIcon={CalendarMonthOutlinedIcon} />
            <b>Calendar</b>
          </div>
          <div className="option">
            <Icon OptionIcon={SettingsOutlinedIcon} />
            <b>settings</b>
          </div>
        </div>
        <div className="logout">
        <Icon OptionIcon={PowerSettingsNewIcon} />
           <b>log out</b>
        </div>
      </div>
  );
}

export default Sidebar;
