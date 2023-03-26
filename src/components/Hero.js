import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/home.jpg';

const Hero = () => {
    return (
        <Wrapper className="section-center">
            <article>
                <h1>
                    design your <br />
                    comfort zone
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas repudiandae ut nostrum,
                    distinctio harum adipisci incidunt facere expedita porro praesentium hic sit dicta illo placeat
                    veniam doloremque velit. Eum quidem aut dolor nemo dicta enim, maxime cupiditate nisi accusamus non.
                </p>
                <Link to="/products" className="btn hero-btn">
                    shop now
                </Link>
            </article>
            <article className="img-container">
                <img src={heroBcg} alt="" className="main-img" />
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    min-height: 50vh;
    display: grid;
    place-items: center;
    text-align: center;

    .img-container {
        display: none;
    }

    h1 {
        font-weight: 500;
        line-height: 1.5;
        margin-top: 5rem;
        color: var(--clr-primary-2);
        font-family: 'Kranky', cursive;
    }

    p {
        line-height: 2;
        max-width: 45em;
        font-weight: 300;
        color: var(--clr-primary-3);
        font-size: 1rem;
        text-align: justify;
    }

    .hero-btn {
        padding: 0.75rem 4rem;
        margin: 1.5rem 0;
        font-size: 1rem;
    }

    @media (min-width: 992px) {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        text-align: left;

        h1 {
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.2rem;
        }

        .img-container {
            display: block;
            position: relative;
        }

        .main-img {
            width: 100%;
            height: 580px;
            position: relative;
            z-index: 100;
            border-radius: var(--radius);
            display: block;
            object-fit: cover;
        }

        .img-container::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: var(--clr-primary-9);
            bottom: -15%;
            left: -30%;
            border-radius: 100%;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }

        .img-container::after {
            content: '';
            position: absolute;
            z-index: -100;
            width: 300px;
            height: 300px;
            background: var(--clr-primary-5);
            top: -15%;
            left: 40%;
            border-radius: 100%;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
        }
    }
`;

export default Hero;
