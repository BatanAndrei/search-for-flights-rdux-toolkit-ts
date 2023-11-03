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
      
      btnViewCheap: (state) => {
        state.btnCheap = false;
        state.btnFast = true;
        state.btnOptimal = true;
      },
      btnViewFast: (state) => {
        state.btnCheap = true;
        state.btnFast = false;
        state.btnOptimal = true;
      },
      btnViewOptimal: (state) => {
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

  export const { btnViewCheap, btnViewFast, btnViewOptimal } = ticketsSlice.actions;

  export const selectStateBtnCheap= (state: RootState) => state.btnViewCheap.btnCheap;
  export const selectStateBtnFast= (state: RootState) => state.btnViewFast.btnFast;
  export const selectStateOptimal= (state: RootState) => state.btnViewOptimal.btnOptimal;
    
    
 