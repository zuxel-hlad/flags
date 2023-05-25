import {
    ALL_COUNTRIES,
    findCountryByName,
    findBorderCountriesByCodes,
} from '../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//all countries
export const fetchAllCountries = createAsyncThunk(
    'allCountries/fetchAllCountries',
    async () => {
        try {
            const { data } = await axios.get(ALL_COUNTRIES);
            const transformedCountries =
                data?.map(country => ({
                    ...country,
                    name: country.name.common,
                    img: country.flags.png,
                    info: [
                        {
                            title: 'Population',
                            description: country.population.toLocaleString(),
                        },
                        {
                            title: 'Region',
                            description: country.region,
                        },
                        {
                            title: 'Capital',
                            description: country.capital,
                        },
                    ],
                })) || [];

            return transformedCountries;
        } catch (e) {
            console.error(e);
        }
    }
);

//one country

export const fetchCountryByName = createAsyncThunk(
    'oneCountry/fetchCountryByName',
    async (name = '') => {
        if (!name && !name.length) return;
        try {
            const { data } = await axios.get(findCountryByName(name));
            return data[0];
        } catch (e) {
            console.error(e);
        }
    }
);

export const fetchBorderCountries = createAsyncThunk(
    'oneCountry/fetchBorderCountries',
    async borders => {
        try {
            const { data } = await axios.get(
                findBorderCountriesByCodes(borders)
            );
            return data;
        } catch (e) {
            console.error(e);
        }
    }
);
