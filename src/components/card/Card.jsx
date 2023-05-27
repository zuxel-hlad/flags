import styled from 'styled-components';
import LazyImage from '../lazy-image/LazyImage';

const Card = ({ img, name, info = [], onClick, tabIndex }) => {
    return (
        <Wrapper onClick={onClick} tabIndex={tabIndex}>
            <CardImageWrapper>
                <LazyImage src={img} alt={name} width="100%" height="100%" />
            </CardImageWrapper>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el, ind) => (
                        <CardListItem key={ind}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};

export default Card;

const Wrapper = styled.a`
    display: 'block';
    text-decoration: none;
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    box-shadow: var(--shadow);

    @media screen and (min-width: 576px) {
        height: 154px;
    }
`;
const CardBody = styled.div`
    padding: 48px 24px;
`;
const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;
const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 16px 0 0;
`;
const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
`;
