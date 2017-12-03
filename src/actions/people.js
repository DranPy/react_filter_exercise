import * as types from '../types/people';

// this is an example action
export const setFilter = (filterQuery) => ({
  type: types.SET_FILTER,
  filterQuery: filterQuery
});

// ...
