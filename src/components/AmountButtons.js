import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease }) => {
    return (
        <Wrapper className="amount-btn">
            <button type="button" className="amount-btn" onClick={decrease}>
                <FaMinus />
            </button>
            <h3 className="amount">{amount}</h3>
            <button type="button" className="amount-btn" onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    );
};

AmountButtons.propTypes = {
    amount: PropTypes.number,
    increase: PropTypes.func,
    decrease: PropTypes.func
};

const Wrapper = styled.div`
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    h3 {
        margin-bottom: 0;
        font-weight: 500;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 1rem;
        padding: 1rem 0;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
    }

    h2 {
        margin-bottom: 0;
    }
`;

export default AmountButtons;
