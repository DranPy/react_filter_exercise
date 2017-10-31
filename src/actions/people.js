import * as types from '../types/people';

// this is an example action
export const setFilter = (payload) => ({
  type: types.SET_FILTER,
  payload: payload
});

// ...
