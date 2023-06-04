import { createSlice } from '@reduxjs/toolkit';
import { fetchCountryByName } from './asyncActions';
import { ICountryDetails } from '../../interfaces/country.details.interface';
import { LoadingStatus } from '../../interfaces/loading.status.type';

export interface OneCountryState {
    country: null | ICountryDetails;
    loadingStatus: LoadingStatus;
    notFound: boolean;
}

const initialState = {
    country: null,
    loadingStatus: 'idle',
    notFound: false,
} as OneCountryState;

const oneCountrySlice = createSlice({
    name: 'oneCountry',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCountryByName.pending, state => {
                state.country = null;
                state.loadingStatus = 'loading';
            })
            .addCase(fetchCountryByName.fulfilled, (state, { payload }) => {
                state.loadingStatus = 'idle';
                state.country = payload;
            })
            .addCase(fetchCountryByName.rejected, (state, action) => {
                state.loadingStatus = 'error';
                state.notFound = action.error.message === '404';
            })
            .addDefaultCase(() => {});
    },
});

const { reducer } = oneCountrySlice;

export default reducer;
