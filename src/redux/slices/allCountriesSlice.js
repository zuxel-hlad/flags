import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from './asyncActions';
const initialState = {
    countries: [],
    search: '',
    region: null,
    loadingStatus: 'idle',
};

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState,
    reducers: {
        setRegion(state, { payload }) {
            console.log(payload);
            state.region = payload;
        },
        setSearch(state, { payload }) {
            state.search = payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllCountries.pending, state => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchAllCountries.fulfilled, (state, { payload }) => {
                state.loadingStatus = 'idle';
                state.countries = payload;
            })
            .addCase(fetchAllCountries.rejected, state => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = allCountriesSlice;

export default reducer;
export const { setRegion, setSearch } = actions;
