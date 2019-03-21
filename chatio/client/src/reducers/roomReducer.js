import { UPDATE_ROOM } from '../constants';

const initialState = {
    roomName: "",
    roomJoined: false,
    message: "",
    messages: [],
    users: [],
    ops: [],
    redirect: false,
    kicked: false,
}
export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_ROOM:
        return action.payload;
        default: return state;
    }
}