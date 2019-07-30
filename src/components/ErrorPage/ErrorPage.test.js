import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should match the snapshot', () => {
    const mockErrorMsg = 'Error doing the thing';
    const wrapper = shallow(<ErrorPage message={mockErrorMsg} />);
    expect(wrapper).toMatchSnapshot();
  }); 
});