import React from 'react';
import { Button } from "@material-ui/core";
const TweetBox = () => {
    return (
        <div className="tweetBox">
        <form>
          <div className="tweetBoxinput">
           <input
              //value={tweetMessage}
              //onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            placeholder="Optional: Enter image URL"
           // value={tweetImage}
            //onChange={(e) => setTweetImage(e.target.value)}
            type="text"
            className="tweetBoximageInput"
          />
          <Button //onClick={sendTweet}
          type="submit" className="tweetBoxbutton">
            Chirp
          </Button>
        </form>
      </div>
    );
};

export default TweetBox;