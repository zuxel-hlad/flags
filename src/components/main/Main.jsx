import styled from 'styled-components';
import { Container } from '../container/Container';

export const Main = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.main`
    padding: 32px 0;
    @media screen and(min-width:767px) {
        padding: 64px 0;
    }
`;
