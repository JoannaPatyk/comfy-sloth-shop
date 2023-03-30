import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import errorImg from '../assets/boho-art.jpg';

const ErrorPage = () => {
    return (
        <Wrapper className="page-100">
            <div>
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found...</h3>
                <Link to="/" className="btn">
                    back home
                </Link>
            </div>
            <img src={errorImg} alt="FLowers" />
        </Wrapper>
    );
};

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    div {
        position: absolute;
    }

    h1 {
        font-size: 8rem;
        font-weight: 300;
    }

    h3 {
        text-transform: none;
        margin-bottom: 2rem;
        font-weight: 500;
    }

    img {
        position: absolute;
        z-index: -100;
        width: 30rem;
        opacity: 0.2;
    }

    @media (min-width: 992px) {
        img {
            width: 40rem;
        }
    }
`;
export default ErrorPage;
