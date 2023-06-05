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
import styled from 'styled-components';
import Controls from '../components/controls/Controls';
import List from '../components/list/List';
import Card from '../components/card/Card';
import Loader from '../components/loader/Loader';
import { IRegion } from '../interfaces/region.interface';

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
            <NotFoundMessage>No countries now.</NotFoundMessage>}
            {!countries.length && search && countriesLoadingStatus !== 'loading'
                && countriesLoadingStatus !== 'error' && 
            <NotFoundMessage>Nothing found for your request.</NotFoundMessage>}

        </section>
    );
};

const NotFoundMessage = styled.span`
    display: block;
    width: max-content;
    margin: 20px auto 0 auto;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

export default Home;
