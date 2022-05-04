import React, { useEffect } from 'react'
import TweetBox  from './TweetBox';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { authentication } from '../Firebase/firebase';
//import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import Post from "./Post";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { setHome } from '../redux/actions/tweetActions';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
const Home = () => {
    // const signIn = () => {
    //     const provider = new TwitterAuthProvider();
    //     signInWithPopup(authentication, provider)
    //     .then((result) => {
    //         console.log(result);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             });
    // };

    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const options = {
      method: 'GET',
      url: 'https://twitter135.p.rapidapi.com/Search/',
      params: {q: 'Hello', count: '20'},
      headers: {
        'X-RapidAPI-Host': 'twitter135.p.rapidapi.com',
        'X-RapidAPI-Key': '63ba1ff21fmshe6a53ea2221dbdap1eb2afjsn723d6f406406'
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
      avatar={Object.entries(store.allReducers.home.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].profile_image_url:""))}
      image={post.image}
    />
  ))
  
}
    return(
        <div>
          
             <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>

          <TweetBox/>
        </div>
        {
        post
         //console.log(store.allReducers.home.search)
        }
      </div>
            { 
            /* <Button onClick={signIn}>Sign in with Twitter</Button> */}
            
        </div>
    )
}

export default Home;

