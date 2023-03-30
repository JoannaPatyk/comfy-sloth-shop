import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/house.jpg';

const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper className="page section section-center">
                <article>
                    <div className="title">
                        <h2 className="title">About our store...</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illo est eum amet voluptatibus
                        deserunt totam libero recusandae nemo hic! Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Optio illo est eum amet voluptatibus deserunt totam libero recusandae nemo hic! Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit. Optio illo est eum amet voluptatibus
                        deserunt totam libero recusandae nemo hic!
                    </p>
                </article>
                <img src={aboutImg} alt="furniture" />
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 3rem;

    .section {
        padding: 2rem;
    }

    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 300px;
        object-fit: cover;
    }

    h2 {
        margin-top: -2rem;
    }

    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 1.5rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
        text-align: justify;
        color: var(--clr-primary-5);
    }

    .title {
        text-align: left;
        font-weight: 500;
        font-family: 'Kranky', cursive;
    }

    .underline {
        margin-left: 0;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;

        img {
            height: 500px;
        }

        h2 {
            margin-top: 0;
        }
    }
`;
export default AboutPage;
