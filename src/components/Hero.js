import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/home-2082922_1920.jpg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article>
        <h1>design your <br />
          comfort zone</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas repudiandae ut nostrum,
          distinctio harum adipisci incidunt facere expedita porro praesentium hic sit dicta illo placeat
          veniam doloremque velit. Eum quidem aut dolor nemo dicta enim, maxime cupiditate nisi accusamus non.
        </p>
        <Link to='/products' className='btn hero-btn'>shop now</Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt="" className='main-img' />
      </article>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  h1 {
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-weight: 300;
    color: var(--clr-grey-5);
    font-size: 1rem;
    text-align: justify;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.2rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
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
    }
  }
`

export default Hero;
