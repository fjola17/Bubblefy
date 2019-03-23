import React from 'react';

import { mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import UserOps from './UserOps';
import { createStore, applyMiddleware, fakestore } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import reducers from '../../reducers';

describe("test for PrivateMessage", () =>{
    it("should find the button for the user ops menu", () =>{
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><UserOps /></Provider>
        const component = mount(ble);
        expect(component.find('button')).toHaveLength(1);
    });
});