import React from 'react';

import { shallow } from 'enzyme';
import { SocketIO, Server } from 'mock-socket'
import ChatWindow from './ChatWindow'

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

    it('Should emit the correct message', () => {
        const message = 'Hello there';
        const component = shallow(<ChatWindow />)
        component.find('[name="message"]').simulate('input', { value: { message: message } });
        component.find('button').first().simulate('click');

        expect(component.state().messages.length).toBe(1);
        expect(component.state().messages[0]).toEqual(`${(new Date()).toLocaleTimeString()} - ${message}`);
    });

    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });

});
