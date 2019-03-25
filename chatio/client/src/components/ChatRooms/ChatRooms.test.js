import React from 'react';

import { mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import ChatRooms from './ChatRooms';
import { createStore, applyMiddleware, fakestore } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import reducers from '../../reducers';
/*
describe("test for PrivateMessage", () =>{
    it("should find the button to create a room", () =>{
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><ChatRooms /></Provider>
        const component = mount(ble);
        expect(component.find('button')).toHaveLength(1);
    });
    it("should be able to create a room", () =>{
        expect("").toBe("");
    })
    it("should be able to join the room lobby", () =>{
        expect("").toBe("");
    })
});*/