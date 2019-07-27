import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        loadPlanets: jest.fn(),
        planets: [
          {
            title: 'earth',
            status: 'baking'
          },
          {
            title: 'mars',
            status: 'preparing for colinization'
          }
        ]
      }
      wrapper = shallow(<App {...props} />, {disableLifecycleMethods: true})
    })
  })
})
