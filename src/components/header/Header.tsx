import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../container/Container';

type Theme = 'light' | 'dark';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
`;
const Title = styled(Link).attrs({
    to: '/',
    'data-aos': 'fade-right',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
`;
const ModeSwitcher = styled.button.attrs({
    type: 'button',
    'data-aos': 'fade-left',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    background-color: var(--colors-ui-base);
    cursor: pointer;
    border: none;
    padding: 0;
    text-transform: capitalize;
`;

const Header = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = (): void => {
        setTheme((prevTheme: Theme) => {
            let currentTheme: Theme = 'light';
            currentTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            return currentTheme;
        });
    };

    useEffect((): void => {
        const localStorageTheme = localStorage.getItem('theme') as Theme;
        if (localStorageTheme) {
            setTheme(localStorageTheme);
            document.body.setAttribute('data-theme', theme);
        }
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world ?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}
                        &nbsp;{theme}
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
