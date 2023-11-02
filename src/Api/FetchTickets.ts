import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { Iticket, TfetchTicketsError } from '../Types/Types';

//Iticket[] тип возвращаемых данных функции createAsyncThunk и тип переменной const data
//тип number говорит какой тип аргумента внутри самой функции createAsyncThunk
//третий параметр это объект thunkApi с полями {dispatch?, state?, extra?, ignoreValue?, rejectValue?}
//rejectValue полезен когда нужно вывести ошибки
export const fetchTickets = createAsyncThunk<Iticket[], number, { rejectValue: TfetchTicketsError }>(
    "tickets/getTickets", 
    async (limit: number, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

      const response = await fetch(`http://localhost:3000/tickets?_limit=${limit}`);
  
      const data: Iticket[] = await response.json();
      //console.log(thunkApi.getState())

      if (response.status !== 200) {
        
        return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
          message: "Failed to fetch tickets." 
        });
      }

      return data; // возврвщвет данные при успешном запросе
    }
  );
  

  