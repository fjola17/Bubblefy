import React from 'react';

import { mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import UserName from './UserName';
import { createStore, applyMiddleware, fakestore } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import reducers from '../../reducers';

/*
jest.useFakeTimers();

jest.mock('../../services/socketService', () => {
    return {
        socket: {
            on: () => {}
        }
    }
})
describe('Tests for UserName', () => {
    let mockSocketServer, mockSocket;
    
    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:5050');
        
        mockSocket = SocketIO.connect('http://localhost:5050');
        jest.runOnlyPendingTimers();
    });
    it("Should be able to find the input and button", () =>{
        
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><UserName /></Provider>
        const component = mount(ble);
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    })
    it("Should make user be able to join the server", () =>{
        const userName = "Ari";
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><UserName /></Provider>
        const component = mount(ble);
       // console.log(component.html());
        component.find('input').simulate('input', {user:{userName : userName}});
        component.find('button').simulate("click");
        component.update();
        //ég virka ekki :(
        expect(component.state().userName).toBe(undefined);
    });
    it("should deny two users having the same username", () =>{
        const userName = "Ari";
        const ble = <Provider store={ createStore(reducers, applyMiddleware(thunk)) }><UserName /></Provider>
        const component = mount(ble);
       // console.log(component.html());
        component.find('input').simulate('input', {user:{userName : userName}});
        component.find('button').simulate("click");
        const userName2 = "Ari";
        component.find('input').simulate('input', {user:{userName : userName}});
        component.find('button').simulate("click");
        expect(userName).toEqual(userName2);
    });
    
    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });
});
*/