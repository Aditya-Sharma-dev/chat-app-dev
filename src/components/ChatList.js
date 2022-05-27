import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
import "../style/ChatList.css";
import Chat from "./Chat";
import { dummy } from "../data";

function ChatList() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const [chat, setChat] = useState([]);
  return (
    <div className="chatlist">
      <div className="top">
        <h2>
          <b>Chats</b>
        </h2>
        <div className="button">
          <Button className="btn" variant="contained" size="large">
            + Create New Chat
          </Button>
        </div>
      </div>
      <div className="search">
        {/* <div className="header_search"> */}
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon size="80" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
        <i className="search_icon">
          <SearchIcon fontSize="medium" />
        </i>
        <input
          className="search_box"
          type="text"
          size={60}
          placeholder="Search"
        />
        {/* <SearchIcon/>
        </input> */}
        {/* </div> */}
      </div>
      <div className="chats">
        {dummy.map((data, key) => {
          return (
            <Chat key={key} name={data.name} description={data.description} />
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
