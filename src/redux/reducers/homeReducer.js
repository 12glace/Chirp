import { TweetTypes } from '../contants/action-type';

const initialstate = {
    home:[],
}
export const homeReducer = (state = initialstate, {type, payload}) => {
    switch(type){
        case TweetTypes.HOME:
            return {...state, search:payload}
        default:
            return state;
    }
}
