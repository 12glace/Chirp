import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
        <div className="post">
      <div className="postavatar">
        <Avatar src={avatar.toString().replace(/,/g, '') }/>
      </div>
      <div className="postbody">
        <div className="postheader">
          <div className="postheaderText">
            <h3>
              {displayName}{" "}
              <span className="postheaderSpecial">
                {verified && <VerifiedUser className="postbadge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="postheaderDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="postfooter">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
    );
};

export default Post;