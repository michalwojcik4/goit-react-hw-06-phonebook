import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/actions';

const initialState = [];

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export default contactsReducer;
