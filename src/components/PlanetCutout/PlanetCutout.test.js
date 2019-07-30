import React from 'react'
import PlanetCutout from './PlanetCutout';
import { shallow } from 'enzyme';

describe('PlanetCutout', () => {
  it('should match the snapshot', () => {
    const props = {
      title:  'earth',
      cutout: 'earth image',
      key: 4
    }
    const wrapper = shallow(<PlanetCutout {...props}/>)
    expect(wrapper).toMatchSnapshot();
  })
})