export const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,flags,population,capital,region';
export const findCountryByName = (name:string): string => BASE_URL + 'name/' + name;
export const findBorderCountriesByCodes = (codes: string[]): string => BASE_URL + 'alpha?codes=' + codes.join(',');
