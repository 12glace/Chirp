import React from 'react'
import TweetBox  from './TweetBox';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { authentication } from '../Firebase/firebase';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import Post from "./Post";
import { Button } from "@material-ui/core";
const Home = () => {
    const signIn = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(authentication, provider)
        .then((result) => {
            console.log(result);
            })
            .catch((error) => {
                console.log(error);
                });
    };
    console.log('test');
    return(
        <div>
             <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        {/* {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
      </div>
            <Button onClick={signIn}>Sign in with Twitter</Button>
            <TweetBox />
        </div>
    )
}

export default Home;