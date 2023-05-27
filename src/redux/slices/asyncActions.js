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
    async name => {
        try {
            let neighbours = [];
            const { data } = await axios.get(findCountryByName(name));

            if (data[0] && 'borders' in data[0]) {
                const borders = await axios.get(findBorderCountriesByCodes(data[0].borders));
                neighbours = await borders.data;
            } else {
                neighbours = [];
            }

            return {
                ...data[0],
                neighbours,
            };
        } catch (e) {
            console.error(e);
            throw new Error(e);
        }
    }
);
