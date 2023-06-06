import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
    styles: {
        control: provided => {
            return {
                ...provided,
                backgroundColor: 'var(--colors-ui-base)',
                color: 'var(--colors-text)',
                padding: '4px',
                border: 'none',
                boxShadow: 'var(--shadow)',
                height: '50px',
            };
        },
        option: (provided, state) => {
            return {
                ...provided,
                cursor: 'pointer',
                color: 'var(--colors-text)',
                backgroundColor: state.isSelected
                    ? 'var(--colors-bg)'
                    : 'var(--colors-ui-base)',
            };
        },
    },
})`
    border-radius: var(--radii);
    font-family: var(--family);
    border: 'none';
    width: 100%;

    @media screen and (min-width: 767px) {
        width: 200px;
    }

    & > * {
        box-shadow: var(--shadow);
    }

    & input {
        padding-left: 4px;
    }

    & * {
        color: var(--colors-text) !important;
    }

    & > div[id] {
        background-color: var(--colors-ui-base);
    }
`;
export default CustomSelect;
