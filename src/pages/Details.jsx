import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../api';
import axios from 'axios';
import Button from '../components/button/Button';
import Info from '../components/info/Info';

const Details = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountry(data[0]));
    }, [name]);

    return (
        <div>
            <Button type="button" onClick={() => navigate(-1)}>
                <IoArrowBack />
                Back
            </Button>
            {country && <Info {...country} navigate={navigate} />}
        </div>
    );
};

export default Details;
