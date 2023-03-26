import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {
    return (
        <Wrapper>
            <div className="products-container">
                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </div>
        </Wrapper>
    );
};

GridView.propTypes = {
    products: PropTypes.array
};

const Wrapper = styled.section`
    img {
        height: 175px;
    }

    .products-container {
        display: grid;
        gap: 2rem 1.4rem;
    }

    @media (min-width: 992px) {
        .products-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1170px) {
        .products-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export default GridView;
