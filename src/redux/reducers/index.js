import {combineReducers} from 'redux';
import { searchReducer } from './searchReducer';
import { homeReducer } from './homeReducer';
const reducers = combineReducers({
    search: searchReducer,
    home: homeReducer
});

export default reducers;