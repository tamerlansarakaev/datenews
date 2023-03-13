import { createReducer, createAction } from '@reduxjs/toolkit';
import { ADD_NEWS } from './actionsTypes';

export const addNews: any = createAction(ADD_NEWS);

const initialState = {
  data: [],
};

export const rootReducer = createReducer(initialState, (builder) => {});
