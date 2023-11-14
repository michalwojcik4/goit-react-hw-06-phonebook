import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/actions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, action) => action.payload,
});

export default filterReducer;
