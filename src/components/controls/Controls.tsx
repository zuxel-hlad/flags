import { FC } from 'react';
import styled from 'styled-components';
import { IRegion } from '../../interfaces/region.interface';
import Search from './Search';
import CustomSelect from './CustomSelect';

interface IOptions {
    label: string;
    value: string;
}

const options: IOptions[] = [
    { label: 'Africa', value: 'Africa' },
    { label: 'Americas', value: 'Americas' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
];

interface ControlsProps {
    search: string;
    region: IRegion;
    setSearch: (arg: string) => void;
    setRegion: (region: IRegion) => void;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const Controls: FC<ControlsProps> = ({
    search,
    setSearch,
    region,
    setRegion,
}) => {
    return (
        <Wrapper>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <CustomSelect
                placeholder="Filter by Region"
                options={options}
                isSearchable={false}
                value={region}
                onChange={setRegion}
                isClearable
            />
        </Wrapper>
    );
};

export default Controls;
