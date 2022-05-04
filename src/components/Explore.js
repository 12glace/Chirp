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
        params: {q: 'Dogecoin', count: '20'},
        headers: {
          'X-RapidAPI-Host': 'twitter135.p.rapidapi.com',
          'X-RapidAPI-Key': '63ba1ff21fmshe6a53ea2221dbdap1eb2afjsn723d6f406406'
        }
    };
    
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
        <div className="feed">
        <div className="feed__header">
          <h2>Explore</h2>
        </div>
        <Search></Search>
        <input></input>
        <Button onClick={search}>Search</Button>
        {

        //   Object.entries(store.allReducers.search.globalObjects.tweets).map((post) => (
        //   <Post
        //     displayName={post.displayName}
        //     username = {console.log(store)
        //     }
        //     verified={post.verified}
        //     text={post[1].full_text}
        //     avatar={post.avatar}
        //     image={post.image}
        //   />
        // ))
      }
      </div>
    );
};


export default Explore;

