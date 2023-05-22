import styled from 'styled-components';

const List = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default List;

const Wrapper = styled.section`
    width: 100%;
    padding: 32px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
        padding: 40px 0;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 64px;
    }
`;
