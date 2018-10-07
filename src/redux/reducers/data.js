import * as types from '../types';

const initialState = {
  count: 10,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case types.GET_DATA:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
