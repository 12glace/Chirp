import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const RightSidebar = () => {
    return (
        <div className='leftsidebar'>
            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{height: 1000}}
        />
     
        </div>
    );
};

export default RightSidebar;