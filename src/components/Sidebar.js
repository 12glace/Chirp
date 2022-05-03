import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { NavLink, Navigate, Link } from 'react-router-dom';

const Sidebar = () => {
   
  return (
    <div className="sidebar">
        <h1 className="chirpIcon" >~(‾▿‾)~</h1>
        <Link className="link" to="/home"><SidebarOption Icon={HomeIcon} text="Home" active={true}/></Link>
        <Link className="link" to="/explore"><SidebarOption Icon={SearchIcon} text="Explore" /></Link>
        <Link className="link" to="/notifications"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
        <Link className="link" to="/messages"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
        <Link className="link" to="/bookmarks"><SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>
        <Link className="link" to="/lists"><SidebarOption Icon={ListAltIcon} text="Lists" /></Link>
        <Link className="link" to="/Profile"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
        <Button variant="outlined" className="chirp" fullWidth>chirp</Button>
    </div>
  );
}

export default Sidebar;