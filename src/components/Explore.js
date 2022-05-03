import React, { useEffect } from 'react';
import axios from 'axios';
//import "../twitterconfig.js";

import { useSelector, useDispatch } from 'react-redux';
import { setSearchTweet } from '../redux/actions/tweetActions';
import Post from './Post';
import { Button } from '@material-ui/core';


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
        // console.log("test");     
        // const response =  axios
        //     .request(options)
        //     .catch(function (error) {
        //         console.error(error);
        //     }).then(console.log(response))

        const axios = require("axios");
        axios.request(options).then(function (response) {
            dispatch(setSearchTweet(response));
            //console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
                   
    }
  

    // const axios = require("axios");
    // axios.request(global.config.options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    return (
        <div className="feed">
        <div className="feed__header">
          <h2>Explore</h2>
        </div>
        <button onClick={search}>Search</button>

        {
            // store.allReducers.search.globalObjects.tweets
         
            //store?.allReducers.search.globalObjects.tweet || "Not loaded yet"
        /* {Object.entries(store.allReducers.search.globalObjects.tweets).map((post) => (
          <Post
            displayName={post.displayName}
            username = {console.log(store)
            }
            verified={post.verified}
            text={post[1].full_text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
      </div>
    );
};


export default Explore;

