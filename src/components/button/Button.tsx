import styled from 'styled-components';

const Button = styled.button`
    padding: 0 16px;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5;
    border-radius: var(--radii);
    border: none;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--colors-text);
    cursor: pointer;
`;
export default Button;
