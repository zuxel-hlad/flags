import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input value={search} onChange={e => setSearch(e.target.value)} />
        </InputContainer>
    );
};

export default Search;

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    border-radius: var(--radii);
    display: flex;
    align-items: center;
    padding: 16px 32px;
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 8px;

    @media screen and (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;
const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
    margin-left: 32px;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
`;
