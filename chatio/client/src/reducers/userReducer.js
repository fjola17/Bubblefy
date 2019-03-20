import { UPDATE_USER } from '../constants';

const initialState = {
    userName : '',
    rooms: {},
    socket: this
}

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return action.payload;
        default: return state;
    }
}