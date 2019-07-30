import { planetsReducer } from './planetsReducer';

describe('planetsReducer', () => {

  it('should return an initial state', () => {
    const expected = [];
    const result = planetsReducer(undefined, []);
    expect(result).toEqual(expected);
  });
  
  it('should return planet info with LOAD_PLANETS', () => {
    const state = [];
    const planets = [{ title: 'mars' }, { title: 'Jupiter' }];
    const action = {
      type: 'LOAD_PLANETS',
      planets
    };
    const expected = [{ title: 'mars' }, { title: 'Jupiter' }];
    const result = planetsReducer(state, action);
    expect(result).toEqual(expected);
  });
});