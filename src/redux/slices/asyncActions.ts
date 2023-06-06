import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    ALL_COUNTRIES,
    findCountryByName,
    findBorderCountriesByCodes,
} from '../../api';
import {
    ICountry,
    ITranformedCountry,
} from '../../interfaces/country.interface';
import { ICountryDetails } from '../../interfaces/country.details.interface';

// all countries
export const fetchAllCountries = createAsyncThunk(
    'allCountries/fetchAllCountries',
    async (): Promise<ITranformedCountry[]> => {
        try {
            const { data } = await axios.get<ICountry[]>(ALL_COUNTRIES);

            const transformedCountries: ITranformedCountry[] =
                data?.map(country => {
                    return {
                        ...country,
                        name: country.name.common,
                        img: country.flags.png,
                        alt: country.flags.alt,
                        info: [
                            {
                                title: 'Population',
                                description:
                                    country.population.toLocaleString(),
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
                    };
                }) || [];

            return transformedCountries;
        } catch (e: unknown) {
            const error = e as AxiosError;
            if (typeof error === 'object') {
                throw new Error(error.message);
            } else {
                throw new Error(error);
            }
        }
    }
);

// one country
export const fetchCountryByName = createAsyncThunk(
    'oneCountry/fetchCountryByName',
    async (name: string): Promise<ICountryDetails> => {
        try {
            let neighbours = [];
            const { data } = await axios.get<ICountryDetails[]>(
                findCountryByName(name)
            );

            if (data[0] && 'borders' in data[0]) {
                const borders = await axios.get(
                    findBorderCountriesByCodes(data[0].borders)
                );
                neighbours = await borders.data;
            } else {
                neighbours = [];
            }

            return {
                ...data[0],
                neighbours,
            };
        } catch (e: unknown) {
            const error = e as AxiosError;
            if (typeof error === 'object') {
                throw new Error(`${error.response.status}`);
            } else {
                console.error(error);
            }
            return null;
        }
    }
);
