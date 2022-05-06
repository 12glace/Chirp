import React, { useEffect } from 'react'
import TweetBox  from './TweetBox';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import Post from "./Post";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { setHome } from '../redux/actions/tweetActions';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
const Home = () => {

    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const options = {
      method: 'GET',
      url: 'https://twitter135.p.rapidapi.com/Search/',
      params: {q: 'Hello', count: '20'},
      headers: {
        'X-RapidAPI-Host': 'twitter135.p.rapidapi.com',
        'X-RapidAPI-Key': '359e3ae211msha8a0227b6ad7584p12c49cjsne4440c64e851'
      }
    };
    
   
useEffect(() => {
  const axios = require("axios");
  axios.request(options).then(function (response) {
      dispatch(setHome(response.data));
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });  
}, [dispatch]);

var post;
if (store.allReducers.home.search===undefined) {
  post = "Loading...";
  
} else {
  post = Object.entries(store.allReducers.home.search.globalObjects.tweets).map((post) => (
    <Post
      displayName={Object.entries(store.allReducers.home.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].name : null))}
      username={Object.entries(store.allReducers.home.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].screen_name : null))}
      verified={Object.entries(store.allReducers.home.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].verified : user[1].verified))}
      text={post[1].full_text}
      avatar={Object.entries(store.allReducers.home.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].profile_image_url_https:""))}
      image={post.image}
    />
  ))
  
}
    return(
      
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
          <TweetBox/>
          {post}
        </div>
      </div>

    )
}

export default Home;

