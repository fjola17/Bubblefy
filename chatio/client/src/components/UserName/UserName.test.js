import React from 'react';

import { shallow, mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import UserName from './UserName';
import { createStore, applyMiddleware, fakestore } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import reducers from '../../reducers';


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
        mockSocketServer.on("connection", socket =>{
            socket.on('adduser', userName =>{
                socket.emit('adduser', userName);
            });
        });
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
        const ble = <Provider store={ createStore(fakestore) }><UserName /></Provider>
        const component = mount(ble);
       // console.log(component.html());
        component.find('input').simulate('input', {userName : userName})
        component.find('button').simulate("click");
        console.log(component.state());
        expect(component.state().userName).toBe(userName);
    });
    it("should deny two users having the same username", () =>{
        expect("").toBe("");
    });
    
    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });
});
