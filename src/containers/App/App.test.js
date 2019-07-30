import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { loadPlanets, loadComplete } from '../../actions'; 

jest.mock('../../utilz/apiCalls', () => ({
  getData: jest.fn().mockImplementation(() => {
    return [{ title: 'earth' }, { title: 'mars' }];
  })
}));

describe('App', () => {
  describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        loadPlanets: jest.fn(),
      }
      wrapper = shallow(<App {...props} />, {disableLifecycleMethods: true})
    })
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should call retrieveData when component mounts', () => {
      wrapper.instance().retrieveData = jest.fn()
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().retrieveData).toHaveBeenCalled()
    });
  });
  describe('mapStateToProps', () => {
    it('should return an object with the planets array', () => {
      const mockState = {
        planets: [{ title: 'mars' }]
      }
      const expected = {
        planets: [{ title: 'mars' }]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('calls dispatch with planets when loadPlanets is called', () => {
      const mockPlanets = [
        { title: 'jupiter' },
        { title: 'pluto' }
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = loadPlanets(mockPlanets);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadPlanets(mockPlanets);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('calls dispatch when loadComplete is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loadComplete();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadComplete();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
