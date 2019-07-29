import React from 'react';
import { shallow } from 'enzyme';
import UserStats from './UserStats';

describe('UserStats', () => {
  let mockPlanet;
  let mockUser;
  let mockUserEmpty;
  beforeEach(() => {
  })
  mockPlanet = {
    title: 'mars',
    image2: '/image2',
    gravity: 0.5,
    travelTime: 2
    }
  mockUser = {
      name: 'David',
      age: 25,
      weight: '180'
    }
  mockUserEmpty = {
      name: 'David',
      age: 25,
      weight: '180'
    }
  it('should match the snapshot with a user', () => {
    const wrapper = shallow(<UserStats planet={mockPlanet} user={mockUser} />)
    expect(wrapper).toMatchSnapshot();
  });
});