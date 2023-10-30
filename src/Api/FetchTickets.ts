import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { Ticket, FetchTicketsError } from '../Types/Types';

export const fetchTickets = createAsyncThunk<Ticket[], number, { rejectValue: FetchTicketsError }>(
    "tickets/getTickets", 
    async (limit: number, thunkApi) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?limit=${limit}`);// //http://localhost:3000/tickets?_limit=${limit}
  
      const data: Ticket[] = await response.json();

      if (response.status !== 200) {
        
        return thunkApi.rejectWithValue({ 
          message: "Failed to fetch todos." 
        });
      }

      return data;
    }
  );