import styled from 'styled-components';
import { FC, JSX } from 'react';
import { NavigateFunction } from 'react-router-dom';
import LazyImage from '../lazy-image/LazyImage';
import { ICountryDetails } from '../../interfaces/country.details.interface';

interface IInfoProps
    extends Pick<
        ICountryDetails,
        | 'name'
        | 'flags'
        | 'capital'
        | 'population'
        | 'region'
        | 'subregion'
        | 'tld'
        | 'currencies'
        | 'languages'
        | 'neighbours'
    > {
    navigate: NavigateFunction;
}

const Wrapper = styled.section`
    margin-top: 48px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;
    align-items: start;

    @media screen and (min-width: 576px) {
        grid-template-columns: minmax(100px, 280px) 1fr;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
        gap: 32px;
    }
`;

const InfoImageWrapper = styled.div`
    width: 100%;
    height: 255px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    & > span {
        width: max-content !important;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: top left;
    }
`;
const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;
const Meta = styled.div`
    margin-top: 48px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        white-space: nowrap;
        font-weight: var(--fw-bold);
    }

    @media screen and (min-width: 767px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;
const TagGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
const Tag = styled.span`
    padding: 0 16px;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

const Info: FC<IInfoProps> = ({
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    tld,
    currencies,
    languages,
    neighbours,
    navigate,
}) => {
    const renderNatiVeName: string =
        (name?.nativeName &&
            Object.keys(name?.nativeName).map(n => {
                return name?.nativeName[n];
            })[Object.keys(name?.nativeName).length - 1].official) ||
        '-';

    const renderTopLevelDomains: JSX.Element[] | '-' =
        tld?.map(d => {
            return <span key={d}>{d}</span>;
        }) || '-';

    const renderLanguages: JSX.Element[] | '-' =
        (languages &&
            Object.keys(languages).map(l => {
                return <span key={l}>{languages[l]}&nbsp;</span>;
            })) ||
        '-';

    const renderCurrencies: JSX.Element[] | '-' =
        (currencies &&
            Object.keys(currencies).map(c => {
                return <span key={c}>{currencies[c].name}&nbsp;</span>;
            })) ||
        '-';

    const neighboursList = (
        <TagGroup>
            {neighbours.map(neighbour => {
                return (
                    <Tag
                        onClick={() => {
                            return navigate(
                                `/country/${neighbour?.name?.common}`
                            );
                        }}
                        key={neighbour}
                    >
                        {neighbour?.name?.common}
                    </Tag>
                );
            }) || []}
        </TagGroup>
    );

    return (
        <Wrapper>
            <InfoImageWrapper>
                <LazyImage
                    src={flags.svg}
                    alt={name.common}
                    width="100%"
                    height="100%"
                />
            </InfoImageWrapper>
            <div data-aos="fade-left">
                <InfoTitle>{name.common}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name:</b>
                            {renderNatiVeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b>
                            {population}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b>
                            {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region: </b>
                            {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b>
                            {capital || '-'}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>
                            {renderTopLevelDomains}
                        </ListItem>
                        <ListItem>
                            <b>Currencies: </b>
                            {renderCurrencies}
                        </ListItem>
                        <ListItem>
                            <b>Languages: </b>
                            {renderLanguages}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries:</b>
                    {neighbours.length ? (
                        neighboursList
                    ) : (
                        <span>There is no border countries</span>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};

export default Info;
