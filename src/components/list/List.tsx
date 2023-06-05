import styled from 'styled-components';
import { FC, ReactPortal } from 'react';

interface ListProps {
    children: JSX.Element | JSX.Element[] | ReactPortal | string | undefined;
}

const List: FC<ListProps> = props => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default List;

const Wrapper = styled.section`
    width: 100%;
    padding: 32px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;

    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
        padding: 40px 0;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 64px;
    }
`;
