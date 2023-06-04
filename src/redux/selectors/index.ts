import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../interfaces/loading.status.type';
import { OneCountryState } from '../slices/oneCountrySlice';
import { RootState } from '../store';

//all countries
export const allCountriesSelector = createSelector(
    state => state.allCountries.countries,
    state => state.allCountries.search,
    state => state.allCountries.region,
    (countries, search, region) => {
        const data = [...countries];
        const regionVal = region?.value ? region?.value : '';

        if (search) {
            return data.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        } else if (regionVal) {
            return data.filter(c => c.region.includes(regionVal));
        } else {
            return data;
        }
    }
);
export const allCountriesLoadingStatusSelector = state =>
    state.allCountries.loadingStatus;
export const allCountriesRegionSelector = state => state.allCountries.region;
export const allCountriesSearchSelector = state => state.allCountries.search;

//one country
export const oneCountrySelector = (state: RootState) =>
    state.oneCountry.country;
export const oneCountryLoadingStatusSelector = (
    state: RootState
): LoadingStatus => state.oneCountry.loadingStatus;
export const oneCountryNotFoundSelector = (state: RootState): boolean =>
    state.oneCountry.notFound;
