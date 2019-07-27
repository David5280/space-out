import React from 'react'
import { shallow } from 'enzyme';
import PlanetCutout from './PlanetCutout';

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