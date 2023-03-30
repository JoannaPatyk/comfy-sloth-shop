import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';

const Services = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <article className="header">
                    <h3>
                        custom furniture <br />
                        built only for yor
                    </h3>
                    <h4>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio commodi nobis vero
                        incidunt, assumenda ex consectetur. Ad unde minima officia.
                    </h4>
                </article>
                <div className="services-center">
                    {services.map((service) => {
                        const { id, icon, title, text } = service;
                        return (
                            <article key={id} className="service">
                                <span className="icon">{icon}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 2rem 0;
    background: var(--clr-primary-10);

    h3 {
        font-family: 'Kranky', cursive;
        font-weight: 500;
        font-size: 2.4rem;
    }

    h4 {
        font-weight: 300;
        text-align: justify;
    }

    h3,
    h4 {
        color: var(--clr-primary-1);
        line-height: 1.5;
    }

    .header h3 {
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 0;
        line-height: 1.8;
        font-weight: 300;
        font-size: 1rem;
        color: var(--clr-primary-2);
        text-align: justify;
    }

    .services-center {
        margin-top: 3rem;
        display: grid;
        text-align: center;
        gap: 2.5rem;
    }

    .service {
        background: var(--clr-primary-5);
        text-align: center;
        padding: 2.5rem 2rem;
        border-radius: var(--radius);

        p {
            color: var(--clr-primary-9);
        }
    }

    span {
        width: 6rem;
        height: 6rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        margin-bottom: 1rem;
        border-radius: 50%;
        background: var(--clr-primary-10);
        color: var(--clr-primary-1);
        svg {
            font-size: 3rem;
        }
    }

    @media (min-width: 992px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 576px) {
        .services-center {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    @media (min-width: 1280px) {
        padding: 0;
        .section-center {
            transform: translateY(5rem);
        }
    }
`;
export default Services;
