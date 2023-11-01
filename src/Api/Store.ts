import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { ticketsSlice } from './Slice';


export const store = configureStore({
    reducer: {
        ticketsExtraReducer: ticketsSlice.reducer
    }
})


//выведение типов из хранилища RootState и RootDispatch, дает возможность не описывать типы редукторов 
export type RootState = ReturnType<typeof store.getState>; 
export type RootDispatch = typeof store.dispatch;

//useAppSelector и useAppDispatch используются во всём проекте TS в место useSelector и useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<RootDispatch>();

