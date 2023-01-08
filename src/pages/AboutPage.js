import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/house-4238414_1920.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="furniture" />
      <article>
        <div className="title">
          <h2 className="title">About our store...</h2>
          <div className='underline'></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Optio illo est eum amet voluptatibus deserunt totam
          libero recusandae nemo hic! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Optio illo est eum amet voluptatibus deserunt totam
          libero recusandae nemo hic! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Optio illo est eum amet voluptatibus deserunt totam
          libero recusandae nemo hic!</p>
      </article>
    </Wrapper>
  </main >
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
 
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
 
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-weight: 300;
    letter-spacing: .1rem;
    text-align: justify;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
    font-weight: 500;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage;
