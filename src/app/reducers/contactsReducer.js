import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/actions';

const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      const updatedState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(updatedState));
      return updatedState;
    })
    .addCase(deleteContact, (state, action) => {
      const updatedState = state.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(updatedState));
      return updatedState;
    });
});

export default contactsReducer;
