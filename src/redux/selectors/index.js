import { createSelector } from '@reduxjs/toolkit';

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
export const oneCountrySelector = state => state.oneCountry.country;
export const oneCountryBorderCountriesSelector = state =>
    state.oneCountry.borderCountries;
