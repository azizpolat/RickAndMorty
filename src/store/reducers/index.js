import {combineReducers} from 'redux';
import characterSlice from './characterReducer';

const rootReducer = combineReducers({
  characters: characterSlice,
});

export default rootReducer;
