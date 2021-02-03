// import { createSlice } from '@reduxjs/toolkit';
// import { changeFilter } from './phone-actions';
// import { fetchContacts, addContacts, deleteContacts } from './phone-operations';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'phoneBook',
//   initialState,
//   reducers: {
//     [changeFilter](state, action) {
//       console.log('hello', action);
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts = action.payload;
//     },
//     [addContacts.fulfilled](state, action) {
//       state.contacts.push(action.payload);
//     },
//     [deleteContacts.fulfilled](state, action) {
//       state.contacts.filter(el => el.id !== action.payload);
//     },
//   },
// });

// export default contactsSlice.reducer;

import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './phone-actions';
import { fetchContacts, addContacts, deleteContacts } from './phone-operations';

const getContacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  filter: filterReducer,
});
