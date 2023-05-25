import { createSlice } from '@reduxjs/toolkit';
import { fetchCountryByName, fetchBorderCountries } from './asyncActions';

const initialState = {
    country: null,
    borderCountries: [],
    loadingStatus: 'idle',
};

const oneCountrySlice = createSlice({
    name: 'oneCountry',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            //fetchCountryByName
            .addCase(fetchCountryByName.pending, state => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchCountryByName.fulfilled, (state, { payload }) => {
                state.loadingStatus = 'idle';
                state.country = payload;
            })
            .addCase(fetchCountryByName.rejected, state => {
                state.loadingStatus = 'error';
            })
            //fetchBorderCountries
            .addCase(fetchBorderCountries.pending, state => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchBorderCountries.fulfilled, (state, { payload }) => {
                state.loadingStatus = 'idle';

                if (payload.length) {
                    state.borderCountries = payload.map(
                        borderCountry => borderCountry.name.common
                    );
                } else {
                    state.borderCountries = payload;
                }
            })
            .addCase(fetchBorderCountries.rejected, state => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const { reducer } = oneCountrySlice;

export default reducer;
