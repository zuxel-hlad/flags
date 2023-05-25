import { configureStore } from '@reduxjs/toolkit';
import allCountries from '../slices/allCountriesSlice';
import oneCountry from '../slices/oneCountrySlice';

const store = configureStore({
    reducer: { allCountries, oneCountry },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;
