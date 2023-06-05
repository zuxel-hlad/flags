import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../interfaces/loading.status.type';
import { RootState } from '../store';
import { IRegion } from '../../interfaces/region.interface';
import { ITranformedCountry } from '../../interfaces/country.interface';

//all countries
export const allCountriesSelector = createSelector(
    (state: RootState): ITranformedCountry[] => state.allCountries.countries,
    (state: RootState): string => state.allCountries.search,
    (state: RootState): IRegion => state.allCountries.region,
    (countries, search, region): ITranformedCountry[] => {
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
export const allCountriesLoadingStatusSelector = (
    state: RootState
): LoadingStatus => state.allCountries.loadingStatus;
export const allCountriesRegionSelector = (state: RootState): IRegion =>
    state.allCountries.region;
export const allCountriesSearchSelector = (state: RootState): string =>
    state.allCountries.search;

//one country
export const oneCountrySelector = (state: RootState) =>
    state.oneCountry.country;
export const oneCountryLoadingStatusSelector = (
    state: RootState
): LoadingStatus => state.oneCountry.loadingStatus;
export const oneCountryNotFoundSelector = (state: RootState): boolean =>
    state.oneCountry.notFound;
