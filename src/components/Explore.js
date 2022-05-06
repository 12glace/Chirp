import React, { useEffect } from 'react';
import axios from 'axios';
//import "../twitterconfig.js";

import { useSelector, useDispatch } from 'react-redux';
import { setSearchTweet } from '../redux/actions/tweetActions';
import Post from './Post';
import { Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';


const Explore = () => {   
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://twitter135.p.rapidapi.com/Search/',
      params: {q: 'Elon Musk', count: '20'},
      headers: {
        'X-RapidAPI-Host': 'twitter135.p.rapidapi.com',
        'X-RapidAPI-Key': '359e3ae211msha8a0227b6ad7584p12c49cjsne4440c64e851'
      }
    };
    
    
var post;
if (store.allReducers.search.search.globalObjects===undefined) {
  post = " Please enter a search term";
} else {
  console.log(store.allReducers)
  post = Object.entries(store.allReducers.search.search.globalObjects.tweets).map((post) => (
    <Post
      displayName={Object.entries(store.allReducers.search.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].name : null))}
      username={Object.entries(store.allReducers.search.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].screen_name : null))}
      verified={false}
      text={post[1].full_text}
      avatar={Object.entries(store.allReducers.search.search.globalObjects.users).map((user) => (user[1].id_str == post[1].user_id_str ? user[1].profile_image_url_https:""))}
      image={post.image}
    />
  ))
  
}
    const search =  () => {
        const axios = require("axios");
        axios.request(options).then(function (response) {
            dispatch(setSearchTweet(response.data));
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });         
    }

    return (
        <div className="timeline">
        <div className="feed__header">
          <h2>Explore</h2>
        </div>
        <Search></Search>
        <input value="Elon Musk"></input>
        <Button onClick={search}>Search</Button>
        <br/>
        {post}
      
      </div>
    );
};


export default Explore;

