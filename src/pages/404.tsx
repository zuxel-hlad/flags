import { FC } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/button/Button';

const NotFoundMessage = styled.h1`
    font-size: var(--fs-lg);
    font-weight: var(--fw-bold);
    text-align: center;
`;

const NotFoundBtn = styled(Button)`
    margin-bottom: 20px;
`;

const ErrorPage: FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <NotFoundBtn
                onClick={() => {
                    return navigate('/');
                }}
            >
                <IoArrowBack />
                Home
            </NotFoundBtn>
            <NotFoundMessage>Page not found.</NotFoundMessage>
        </>
    );
};

export default ErrorPage;
