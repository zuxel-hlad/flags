import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../interfaces/loading.status.type';
import { RootState } from '../store';
import { IRegion } from '../../interfaces/region.interface';
import { ITranformedCountry } from '../../interfaces/country.interface';

// all countries
export const allCountriesSelector = createSelector(
    (state: RootState): ITranformedCountry[] => {
        return state.allCountries.countries;
    },
    (state: RootState): string => {
        return state.allCountries.search;
    },
    (state: RootState): IRegion => {
        return state.allCountries.region;
    },
    (countries, search, region): ITranformedCountry[] => {
        const data = [...countries];
        const regionVal = region?.value ? region?.value : '';

        if (search) {
            return data.filter(c => {
                return c.name.toLowerCase().includes(search.toLowerCase());
            });
        }
        if (regionVal) {
            return data.filter(c => {
                return c.region.includes(regionVal);
            });
        }
        return data;
    }
);
export const allCountriesLoadingStatusSelector = (
    state: RootState
): LoadingStatus => {
    return state.allCountries.loadingStatus;
};
export const allCountriesRegionSelector = (state: RootState): IRegion => {
    return state.allCountries.region;
};
export const allCountriesSearchSelector = (state: RootState): string => {
    return state.allCountries.search;
};

// one country
export const oneCountrySelector = (state: RootState) => {
    return state.oneCountry.country;
};
export const oneCountryLoadingStatusSelector = (
    state: RootState
): LoadingStatus => {
    return state.oneCountry.loadingStatus;
};
export const oneCountryNotFoundSelector = (state: RootState): boolean => {
    return state.oneCountry.notFound;
};
