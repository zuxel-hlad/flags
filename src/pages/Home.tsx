import { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { fetchAllCountries } from '../redux/slices/asyncActions';
import { setRegion, setSearch } from '../redux/slices/allCountriesSlice';
import {
    allCountriesSelector,
    allCountriesLoadingStatusSelector,
    allCountriesRegionSelector,
    allCountriesSearchSelector,
} from '../redux/selectors';
import { IRegion } from '../interfaces/region.interface';
import styled from 'styled-components';
import Controls from '../components/controls/Controls';
import List from '../components/list/List';
import Card from '../components/card/Card';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/error-message/ErrorMessage';

const Home: FC = () => {
    const countries = useAppSelector(allCountriesSelector);
    const region = useAppSelector(allCountriesRegionSelector);
    const search = useAppSelector(allCountriesSearchSelector);
    const countriesLoadingStatus = useAppSelector(
        allCountriesLoadingStatusSelector
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect((): void => {
        if (!countries.length) {
            dispatch(fetchAllCountries());
        }
    }, []);

    const updateRegion = (regionVal: IRegion): void => {
        dispatch(setRegion(regionVal));
    };

    const searchCountry = (searchVal: string): void => {
        dispatch(setSearch(searchVal));
    };

    const countriesList: JSX.Element[] = countries.map(
        (country, idx): JSX.Element => {
            return (
                <Card
                    key={idx}
                    {...country}
                    onClick={() => navigate(`country/${country.name}`)}
                    tabIndex={idx + 1}
                />
            );
        }
    );

    return (
        <section>
            {countriesLoadingStatus === 'loading' && <Loader />}
            <Controls
                region={region}
                search={search}
                setRegion={updateRegion}
                setSearch={searchCountry}
            />
            {countries.length && !search ? <List>{countriesList}</List> : null}
            {!countries.length && !search && countriesLoadingStatus !== 'loading'
                && countriesLoadingStatus !== 'error' && 
            <ErrorMessage>No countries now.</ErrorMessage>}
            {!countries.length && search && countriesLoadingStatus !== 'loading'
                && countriesLoadingStatus !== 'error' && 
            <ErrorMessage>Nothing found for your request.</ErrorMessage>}
            {countriesLoadingStatus === 'error' && <ErrorMessage>Ooops... Something goes wrong.<br/>
            Please, refresh page, and try again.
            </ErrorMessage>}

        </section>
    );
};

export default Home;
