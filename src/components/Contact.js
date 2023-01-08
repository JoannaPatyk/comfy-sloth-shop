import React from 'react';
import styled from 'styled-components';
import errorImg from '../assets/boho-art-7375748_1920.jpg'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off!</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint odio dicta cum suscipit molestias, nostrum minima nam est neque debitis.
          </p>
          <form className='contact-form'>
            <input
              type="email"
              className='form-input'
              placeholder='Please, enter your email ...'
            />
            <button type='submit' className='submit-btn'>subscribe</button>
          </form>
          <img src={errorImg} alt="FLowers" />
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: none;
    font-weight: 500;
  }

  p {
    line-height: 2;
    max-width: 45em;
    font-weight: 300;
    color: var(--clr-grey-5);
  }

  .content {
    position:relative;
  }

  img {
    position: absolute;
    top: -200%;
    left: -20%;
    z-index: -100;
    width: 20rem;
    opacity: .3;
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
    border: 2px solid var(--clr-grey-5);
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
    font-size: .8rem;
    letter-spacing: .5px;
    color: color: var(--clr-grey-5);
  }

  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }

  .submit-btn:hover {
    color: var(--clr-black);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact;
