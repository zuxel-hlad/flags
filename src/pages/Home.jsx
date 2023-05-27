import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries } from '../redux/slices/asyncActions.js';
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
import Loader from '../components/loader/Loader.jsx';

const Home = () => {
    const countries = useSelector(allCountriesSelector);
    const region = useSelector(allCountriesRegionSelector);
    const search = useSelector(allCountriesSearchSelector);
    const countriesLoadingStatus = useSelector(
        allCountriesLoadingStatusSelector
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length) {
            dispatch(fetchAllCountries());
        }
    }, [countries, dispatch]);

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
                setRegion={regionVal => dispatch(setRegion(regionVal))}
                search={search}
                setSearch={searchVal => dispatch(setSearch(searchVal))}
            />
            <List>{countriesList}</List>
        </section>
    );
};

export default Home;
