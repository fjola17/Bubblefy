import React from 'react'
import App from "./App"
import { shallow } from 'enzyme';

describe('App.js tests', () => {


    it('Renders two routes', () =>{
        const wrapper = shallow(<App /> );
        expect(wrapper.find('Route')).toHaveLength(2);
    });
});
