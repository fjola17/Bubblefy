import { UPDATE_ROOM } from '../constants';

export const updateRoom = newRoom =>{
    console.log(newRoom);
    return{
        type: UPDATE_ROOM,
        payload: newRoom
    };
};