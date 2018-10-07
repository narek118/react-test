import * as types from '../types';

export const changeCount = count => ({ type: types.CHANGE_COUNT, count });

export const setData = data => ({ type: types.GET_DATA, data });
