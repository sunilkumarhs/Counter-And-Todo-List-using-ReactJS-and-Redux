import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import {TodoSlice} from './TodoSlice';

const rootReducer = combineReducers({
  list: TodoSlice,
  counter: counterSlice
})
const store = configureStore({
  reducer: rootReducer,
})

// const store = configureStore({
//   reducer : TodoSlice,
//   //reducer : counterSlice,
//   // reducer: {
//   //   components : TodoSlice,
//   //   counter : counterReducer
//   // } 
// });

export default store;
