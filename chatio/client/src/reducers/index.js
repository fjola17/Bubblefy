import { combineReducers} from 'redux';
import user from './userReducer.js';
import room from './roomReducer'
export default combineReducers({user, room});