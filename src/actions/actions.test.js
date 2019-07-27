import * as actions from './index';

describe('actions', () => {
  it('should have a type of LOAD_PLANETS', () => {
    const planets = [{ title: 'mars' }]
    const expectedAction = {
      type: 'LOAD_PLANETS',
      planets: [{ title: 'mars' }]
    };
    const result = actions.loadPlanets(planets)
    expect(result).toEqual(expectedAction);
  })
})