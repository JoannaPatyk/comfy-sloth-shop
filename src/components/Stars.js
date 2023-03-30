import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsStarHalf, BsStar } from 'react-icons/bs';
import { TiStarFullOutline } from 'react-icons/ti';

const Stars = ({ stars, reviews }) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.75;
        return (
            <span key={index}>
                {stars >= index + 1 ? <TiStarFullOutline /> : stars >= number ? <BsStarHalf /> : <BsStar />}
            </span>
        );
    });

    return (
        <Wrapper>
            <div className="stars">{tempStars}</div>
            <p className="reviews">({reviews} customer reviews)</p>
        </Wrapper>
    );
};

Stars.propTypes = {
    stars: PropTypes.number,
    reviews: PropTypes.number
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
        color: #fae20a;
        font-size: 1rem;
        margin-right: 0.25rem;
    }

    p {
        margin-left: 0.5rem;
        margin-bottom: 0;
        color: var(--clr-primary-1);
    }
`;
export default Stars;
