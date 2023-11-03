import {TtikcetsState } from '../Types/Types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTickets } from './FetchTickets';
import{ RootState } from '../Api/Store';



  const initialState: TtikcetsState = { //дэфолтовое значение полей
    listTickets: [],
    error: null,
    status: "idle",
    btnCheap: true,
    btnFast: true,
    btnOptimal: true,
  };


  export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {

      btnViewCheapReducer: (state) => {
        state.btnCheap = false;
        state.btnFast = true;
        state.btnOptimal = true;
      },
      btnViewFastReducer: (state) => {
        state.btnCheap = true;
        state.btnFast = false;
        state.btnOptimal = true;
      },
      btnViewOptimalReducer: (state) => {
        state.btnCheap = true;
        state.btnFast = true;
        state.btnOptimal = false;
      }
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

  export const { btnViewCheapReducer, btnViewFastReducer, btnViewOptimalReducer } = ticketsSlice.actions;

  export const selectStateBtnCheap= (state: RootState) => state.btnViewCheapReducer.btnCheap;
  export const selectStateBtnFast= (state: RootState) => state.btnViewFastReducer.btnFast;
  export const selectStateOptimal= (state: RootState) => state.btnViewOptimalReducer.btnOptimal;
    
    
 