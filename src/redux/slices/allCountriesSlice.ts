import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from './asyncActions';
import { ITranformedCountry } from '../../interfaces/country.interface';
import { LoadingStatus } from '../../interfaces/loading.status.type';
import { IRegion } from '../../interfaces/region.interface';

export interface IAllCountriesState {
    countries: ITranformedCountry[];
    search: string;
    region: null | IRegion;
    loadingStatus: LoadingStatus;
}

const initialState: IAllCountriesState = {
    countries: [],
    search: '',
    region: null,
    loadingStatus: 'idle',
};

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState,
    reducers: {
        setRegion(state, { payload }: PayloadAction<IRegion>) {
            state.region = payload;
        },
        setSearch(state, { payload }: PayloadAction<string>) {
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
