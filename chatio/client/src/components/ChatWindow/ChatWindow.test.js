import React from 'react';

import { shallow, mount } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import ChatWindow from './ChatWindow'
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

describe('Tests for ChatWindow', () => {
    let mockSocketServer, mockSocket;
    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:5050');

        mockSocketServer.on('connection', socket => {
            socket.on('message', message => {
                socket.emit('message', message);
            });
        });

        mockSocket = SocketIO.connect('http://localhost:5050')

        jest.runOnlyPendingTimers();
    });

    it("should be able to find the correct button to send the message", ()=>{
        expect("").toBe("")
    })
    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });

});
