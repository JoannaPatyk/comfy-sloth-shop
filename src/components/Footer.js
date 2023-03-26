import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-abstract.png';

const Footer = () => {
    return (
        <Wrapper>
            <div>
                <h5>
                    &copy; {new Date().getFullYear()} <span>the most cozy shop</span>
                </h5>
                <h6>All rights reserved</h6>
            </div>
            <img src={logo} alt="logo" />
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--clr-black);
    text-align: center;

    span {
        color: var(--clr-primary-5);
        font-weight: 300;
    }

    h5 {
        font-family: 'Kranky', cursive;
    }

    h5,
    h6 {
        color: var(--clr-white);
        margin: 0.1rem;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1.25;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    h6 {
        font-weight: 100;
    }

    img {
        width: 80px;
    }

    @media (min-width: 776px) {
        flex-direction: row;
    }
`;
export default Footer;
