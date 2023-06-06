import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allCountries from '../slices/allCountriesSlice';
import oneCountry from '../slices/oneCountrySlice';

const store = configureStore({
    reducer: { allCountries, oneCountry },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware();
    },
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
