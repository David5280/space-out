import React from 'react'
import LoadingDisplay from './LoadingDisplay';
import { shallow } from 'enzyme';

describe('PlanetCutout', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LoadingDisplay />)
    expect(wrapper).toMatchSnapshot();
  })
});