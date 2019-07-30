import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme'

describe('Header', () => {
  it('should match the snapshot', () => {
    const mockPlanets = [
      {title: 'earth', population: 'too many'},
      {title: 'mars', population: 'none, yet'}
    ];
    const wrapper = shallow(<Header planets={mockPlanets}/>);
    expect(wrapper).toMatchSnapshot();
  });
});