import { loadingReducer, errorReducer } from './loadingReducer';

describe('loadingReducer', () => {

  it('should return an initial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, true);
    expect(result).toEqual(expected);
  });
  
  it('should update state.loading after LOAD_COMPLETE', () => {
    const state = true;
    const action = {
      type: 'LOAD_COMPLETE',
    };;
    expect(state).toEqual(true);
    const result = loadingReducer(state, action);
    expect(result).toEqual(false);
  });
});

describe('errorReducer', () => {

  it('should return an initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, true);
    expect(result).toEqual(expected);
  });
  
  it('should update state.error if hasErrored fires', () => {
    const state = '';
    const message = 'Error doing things'
    const action = {
      type: 'HAS_ERRORED',
      message
    }
    expect(state).toEqual('')
    const result = errorReducer(state, action);
    expect(result).toEqual('Error doing things')
  });
});