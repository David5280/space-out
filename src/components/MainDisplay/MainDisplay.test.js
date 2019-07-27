import React from 'react';
import { shallow } from 'enzyme';
import MainDisplay from './MainDisplay';

describe('Main Display', () => {
  let wrapper;
  let mockPlanets;
  beforeEach(() => {
    mockPlanets = [
      {title: 'earth', cutout: '/fakecutout',  key: '2'}
    ];
    wrapper = shallow(<MainDisplay planets={mockPlanets} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})