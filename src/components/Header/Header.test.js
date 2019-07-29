import React from 'react';
import { shallow } from 'enzyme'
import Header from './Header';

describe('Header', () => {
  it('should match the snapshot', () => {
    const mockPlanets = [
      {title: 'earth', population: 'too many'},
      {title: 'mars', population: 'none, yet'}
    ]
    const wrapper = shallow(<Header planets={mockPlanets}/>);
    expect(wrapper).toMatchSnapshot();
  });
});