import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCountryByName,
    fetchBorderCountries,
} from '../redux/slices/asyncActions';
import {
    oneCountrySelector,
    oneCountryBorderCountriesSelector,
} from '../redux/selectors';
import Button from '../components/button/Button';
import Info from '../components/info/Info';

const Details = () => {
    const country = useSelector(oneCountrySelector);
    const borderCountries = useSelector(oneCountryBorderCountriesSelector);
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryByName(name));
    }, [name, dispatch]);

    useEffect(() => {
        if (country && country.borders) {
            dispatch(fetchBorderCountries(country.borders));
        }
    }, [country, dispatch]);

    return (
        <div>
            <Button type="button" onClick={() => navigate(-1)}>
                <IoArrowBack />
                Back
            </Button>
            {country && (
                <Info
                    {...country}
                    borderCountries={borderCountries}
                    navigate={navigate}
                />
            )}
        </div>
    );
};

export default Details;
