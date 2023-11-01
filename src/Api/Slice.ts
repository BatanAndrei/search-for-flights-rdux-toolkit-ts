import {TtikcetsState } from '../Types/Types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTickets } from './FetchTickets';
import{ RootState } from '../Api/Store';


  const initialState: TtikcetsState = { //дэфолтовое значение полей статусов запроса
    list: [],
    error: null,
    status: "idle",
  };


  export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
      //...
    },
  
    extraReducers: (builder) => {
  
      builder
      .addCase(fetchTickets.pending, (state) => {
        
        state.status = "loading";
        state.error = null;
      });
  
      builder
      .addCase(fetchTickets.fulfilled, 
        (state, { payload }) => {
     
        state.list.push(...payload);
        state.status = "idle";
      });
  
      builder
      .addCase(fetchTickets.rejected, 
        (state, { payload }) => {
       
        if (payload) state.error = payload.message;
        state.status = "idle";
      });
    },
  });


  export const selectStatus = (state: RootState) => state.ticketsExtraReducer.status; //статус в ticketsExtraReducer

