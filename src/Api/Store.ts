import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { ticketsSlice } from './Slice';


export const store = configureStore({
    reducer: {
        tickets: ticketsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootDispatch = typeof store.dispatch;

    export const useAppDispatch = () => useDispatch<RootDispatch>();

