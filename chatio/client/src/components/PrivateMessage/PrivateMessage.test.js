import React from 'react';

import { mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import PrivateMessage from './PrivateMessage';
import { createStore, applyMiddleware, fakestore } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import reducers from '../../reducers';
/*
describe("test for PrivateMessage", () =>{
    it("should find the button to send the message", () =>{
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><PrivateMessage /></Provider>
        const component = mount(ble);
        expect(component.find('button')).toHaveLength(1);
    });
});*/