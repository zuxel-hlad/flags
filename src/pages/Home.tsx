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
        dispatch(fetchAllCountries());
    }, [dispatch]);

    const updateRegion = (regionVal: IRegion): void => {
        dispatch(setRegion(regionVal));
    };

    const searchCountry = (searchVal: string): void => {
        dispatch(setSearch(searchVal));
    };

    const countriesList = countries.map((country, idx) => {
        return (
            <Card
                key={idx}
                {...country}
                onClick={() => navigate(`country/${country.name}`)}
                tabIndex={idx + 1}
            />
        );
    });

    return (
        <section>
            {countriesLoadingStatus === 'loading' && <Loader />}
            <Controls
                region={region}
                search={search}
                setRegion={updateRegion}
                setSearch={searchCountry}
            />
            <List>{countriesList}</List>
        </section>
    );
};

export default Home;
