import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { Iticket, TfetchTicketsError } from '../Types/Types';

export const fetchTickets = createAsyncThunk<Iticket[], number, { rejectValue: TfetchTicketsError }>(
    "tickets/getTickets", 
    async (limit: number, thunkApi) => {
      const response = await fetch(`http://localhost:3000/tickets?_limit=${limit}`);
  
      const data: Iticket[] = await response.json();
      console.log(data)

      if (response.status !== 200) {
        
        return thunkApi.rejectWithValue({ 
          message: "Failed to fetch todos." 
        });
      }

      return data;
    }
  );