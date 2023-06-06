import { FC, JSX } from 'react';
import styled from 'styled-components';
import Container from '../container/Container';

interface MainProps {
    children: JSX.Element;
}

const Wrapper = styled.main`
    padding: 131px 0;
    @media screen and(min-width:767px) {
        padding: 145px 0;
    }
`;

export const Main: FC<MainProps> = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;
