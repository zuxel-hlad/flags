import { createSlice } from '@reduxjs/toolkit';
import { fetchCountryByName } from './asyncActions';

const initialState = {
    country: null,
    loadingStatus: 'idle',
    notFound: false,
};

const oneCountrySlice = createSlice({
    name: 'oneCountry',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            //fetchCountryByName
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
                state.notFound =
                    parseInt(
                        action.error.message
                            .split(' ')
                            .filter(item => !isNaN(item))
                    ) === 404;
            })
            .addDefaultCase(() => {});
    },
});

const { reducer } = oneCountrySlice;

export default reducer;
