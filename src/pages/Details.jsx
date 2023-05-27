import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryByName } from '../redux/slices/asyncActions';
import {
    oneCountrySelector,
    oneCountryLoadingStatusSelector,
    oneCountryNotFoundSelector,
} from '../redux/selectors';
import Button from '../components/button/Button';
import Info from '../components/info/Info';
import Loader from '../components/loader/Loader';
import { NotFound } from '../pages';

const Details = () => {
    const country = useSelector(oneCountrySelector);
    const loadingStatus = useSelector(oneCountryLoadingStatusSelector);
    const notFound = useSelector(oneCountryNotFoundSelector);
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                <Button type="button" onClick={() => navigate(-1)}>
                    <IoArrowBack />
                    Back
                </Button>
                {country && <Info {...country} navigate={navigate} />}
            </div>
        </>
    );
};

export default Details;
