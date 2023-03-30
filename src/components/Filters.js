import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
    const {
        filters: { text, category, company, color, min_price, price, max_price, shipping },
        updateFilters,
        clearFilters,
        all_products
    } = useFilterContext();

    const categories = getUniqueValues(all_products, 'category');
    const companies = getUniqueValues(all_products, 'company');
    const colors = getUniqueValues(all_products, 'colors');

    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <input
                            type="text"
                            name="text"
                            placeholder="search..."
                            className="search-input"
                            value={text}
                            onChange={updateFilters}
                        />
                    </div>
                    <div className="form-control">
                        <h5>category</h5>
                        <div>
                            {categories.map((c, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={updateFilters}
                                        type="button"
                                        name="category"
                                        className={`${category === c.toLowerCase() ? 'active' : null}`}
                                    >
                                        {c}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>company</h5>
                        <select name="company" value={company} onChange={updateFilters} className="company">
                            {companies.map((c, index) => {
                                return (
                                    <option key={index} value={c}>
                                        {c}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-control">
                        <h5>colors</h5>
                        <div className="colors">
                            {colors.map((c, index) => {
                                if (c === 'all') {
                                    return (
                                        <button
                                            key={index}
                                            name="color"
                                            onClick={updateFilters}
                                            data-color="all"
                                            className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}
                                        >
                                            all
                                        </button>
                                    );
                                }
                                return (
                                    <button
                                        key={index}
                                        name="color"
                                        style={{ background: c }}
                                        className={`${color === c ? 'color-btn active' : 'color-btn'}`}
                                        data-color={c}
                                        onClick={updateFilters}
                                    >
                                        {color === c ? <FaCheck /> : null}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>price</h5>
                        <p className="price">{formatPrice(price)}</p>
                        <input
                            type="range"
                            name="price"
                            min={min_price}
                            max={max_price}
                            onChange={updateFilters}
                            value={price}
                            className="slider"
                        />
                    </div>
                    <div className="form-control shipping">
                        <label htmlFor="shipping" className="form">
                            free shipping
                        </label>
                        <input
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            onChange={updateFilters}
                            checked={shipping}
                        />
                    </div>
                </form>
                <button type="button" className="btn clear-btn" onClick={clearFilters}>
                    {' '}
                    clear filters
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;
        h5 {
            margin-bottom: 0.5rem;
            color: var(--clr-primary-1);
            font-family: 'Kranky', cursive;
        }
    }

    .search-input {
        padding: 0.5rem;
        background: transparent;
        border-radius: var(--radius);
        border: 1px solid var(--clr-primary-1);
        letter-spacing: var(--spacing);
        font-family: inherit;
        outline: none;
    }

    .search-input::placeholder {
        text-transform: capitalize;
        color: var(--clr-primary-7);
    }

    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        font-family: inherit;
        font-size: 1rem;
        letter-spacing: var(--spacing);
        color: var(--clr-primary-5);
        cursor: pointer;
    }

    .active {
        font-weight: 600;
        color: var(--clr-primary-1);
        border-color: var(--clr-primary-1);
    }

    .company {
        background: var(--clr-primary-10);
        border-radius: var(--radius);
        border-color: transparent;
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        padding: 0.5rem;
    }

    .colors {
        display: flex;
        align-items: center;
    }

    .color-btn {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: var(--clr-black);
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }

    .all-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
    }

    .active {
        opacity: 1;
    }

    .all-btn .active {
        text-decoration: underline;
    }

    .price {
        margin-bottom: 0.25rem;
        color: var(--clr-primary-5);
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: var(--clr-primary-10);
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--clr-primary-1);
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--clr-primary-5);
        cursor: pointer;
    }

    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-transform: uppercase;
        column-gap: 0.5rem;
        font-size: 1rem;
    }

    .form {
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;
        width: 10rem;
    }

    input[type='checkbox'] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--form-background);
        margin: 0;
        font-family: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type='checkbox']::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: var(--clr-primary-1);
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }

    input[type='checkbox']:focus {
        outline: max(2px, 0.15em) solid currentColor;
        outline-offset: max(2px, 0.15em);
    }

    .clear-btn {
        background: var(--clr-red-dark);
        color: var(--clr-white);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        text-transform: uppercase;
        font-family: 'Kranky', cursive;
    }

    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;
export default Filters;
