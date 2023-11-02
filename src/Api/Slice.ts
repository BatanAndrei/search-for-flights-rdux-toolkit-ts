import {TtikcetsState } from '../Types/Types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTickets } from './FetchTickets';
import{ RootState } from '../Api/Store';


  const initialState: TtikcetsState = { //дэфолтовое значение полей статусов запроса
    listTickets: [],
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
     
        state.listTickets.push(...payload);
        state.status = "idle";
      });
  
      builder
      .addCase(fetchTickets.rejected, 
        (state, { payload }) => {
       
        if (payload) state.error = payload.message; //В payload.message приходит из fetchTickets => return thunkApi.rejectWithValue({ message: "Failed to fetch tickets." })
        state.status = "idle";
      });
    },
  });


  export const selectStatus = (state: RootState) => state.ticketsExtraReducer.status; //статус в ticketsExtraReducer
  export const selectListTickets = (state: RootState) => state.ticketsExtraReducer.listTickets

