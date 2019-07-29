import React from 'react';
import { StatsForm } from './StatsForm';
import { shallow } from 'enzyme';

describe('StatsForm', () => {
  let e;
  let wrapper;
  let mockPlanets;
  let mockUser;
  let mockUser2;
  beforeEach(() => {
    e = {
      target: {
        name: 'name',
        value: 'something'
      }
    };
    mockPlanets = [
      {title: 'earth', population: 'too many'},
      {title: 'mars', population: 'none, yet'}
    ];
    mockUser = {
      name: 'David',
      age: 25,
      weight: '180'
    };
    mockUser2 = {
      name: '',
      age: null,
      weight: ''
    };
    wrapper = shallow(<StatsForm planets={mockPlanets} user={mockUser}/>)

  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state when handleChange is invoked', () => {
    wrapper.instance().handleChange(e)
    expect(wrapper.state('name')).toEqual('something')
  });
  it('should invoke handleChange on input', () => {
    wrapper = shallow(<StatsForm planets={mockPlanets} user={mockUser2}/>);
    
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.name-input').simulate('change', e);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });
  it('should call handleSubmit on button click', () => {
    wrapper = shallow(<StatsForm planets={mockPlanets} user={mockUser2}/>);
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.find('.submit-btn').simulate('click');
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });
});