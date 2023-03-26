import React from 'react';
import styled from 'styled-components';
import errorImg from '../assets/boho-art.jpg';

const Contact = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>Join our newsletter and get 20% off!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio dicta cum suscipit molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio dicta cum suscipit molestias.
                </p>
                <form className="contact-form">
                    <input type="email" className="form-input" placeholder="Please, enter your email..." />
                    <button type="submit" className="submit-btn">
                        subscribe
                    </button>
                </form>
                <img src={errorImg} alt="FLowers" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 5rem 0;

    .section-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    h3 {
        text-transform: none;
        font-weight: 500;
        font-family: 'Kranky', cursive;
    }

    p {
        line-height: 2;
        font-size: 0.8rem;
        font-weight: 300;
        text-align: center;
        max-width: 700px;
        color: var(--clr-primary-4);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
        width: 300px;
        opacity: 0.3;
    }

    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--clr-primary-5);
        outline: none;
    }

    .form-input {
        border-right: none;
        color: var(--clr-grey-3);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }

    .submit-btn {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        font-family: 'Montserrat', sans-serif;
    }

    .form-input::placeholder {
        font-weight: 100;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        font-family: inherit;
        color: var(--clr-primary-7);
    }

    .submit-btn {
        background: var(--clr-primary-5);
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        color: var(--clr-white);
        font-family: 'Kranky', cursive;
        cursor: pointer;
    }

    .submit-btn:hover {
        color: var(--clr-black);
    }

    @media (max-width: 1050px) {
        img {
            display: none;
        }
    }

    @media (min-width: 1280px) {
        padding: 15rem 0;
    }
`;

export default Contact;
