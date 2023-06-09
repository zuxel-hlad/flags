import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { fetchCountryByName } from '../redux/slices/asyncActions';
import {
    oneCountrySelector,
    oneCountryLoadingStatusSelector,
    oneCountryNotFoundSelector,
} from '../redux/selectors';
import Button from '../components/button/Button';
import Info from '../components/info/Info';
import Loader from '../components/loader/Loader';
import NotFound from './404';
import { ICountryDetails } from '../interfaces/country.details.interface';

const Details: FC = () => {
    const country = useAppSelector(oneCountrySelector);
    const loadingStatus = useAppSelector(oneCountryLoadingStatusSelector);
    const notFound = useAppSelector(oneCountryNotFoundSelector);
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCountryByName(name));
    }, [name, dispatch]);

    if (notFound) {
        return <NotFound />;
    }

    return (
        <>
            {loadingStatus === 'loading' && <Loader />}
            <div>
                <Button
                    type="button"
                    onClick={() => {
                        return navigate(-1);
                    }}
                >
                    <IoArrowBack />
                    Back
                </Button>
                {country && (
                    <Info
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...(country as ICountryDetails)}
                        navigate={navigate}
                    />
                )}
            </div>
        </>
    );
};

export default Details;
