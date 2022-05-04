import {TweetTypes} from '../contants/action-type';
export const setSearchTweet = (search) => {
    return {
        type: TweetTypes.SEARCH_TWEET,
        payload: search
    }
}
export const setHome = (search) => {
    return {
        type: TweetTypes.HOME,
        payload: search
    }
}

// export const searchUser = (search) => {
//     return {
//         type: TweetTypes.SEARCH_USER,
//         payload: search
//     }
// }