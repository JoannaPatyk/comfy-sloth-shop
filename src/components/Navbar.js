import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-abstract.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
    const { openSidebar } = useProductsContext();
    const { myUser } = useUserContext();

    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="logoTitle">
                        <span>t</span>he
                        <span>m</span>ost
                        <span>c</span>ozy
                        <span>s</span>hop
                    </div>
                    <button type="button" className="nav-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                    {myUser && (
                        <li>
                            <Link to="/checkout">checkout</Link>
                        </li>
                    )}
                </ul>
                <CartButtons />
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    .nav-center {
        width: 80vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }

    .nav-header {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: -20px;
        margin-top: 0.8rem;
        img {
            width: 80px;
        }
    }

    .logoTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Kranky', cursive;
        color: var(--clr-primary-2);
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.4rem;
    }

    .logoTitle span {
        font-size: 1.8rem;
        color: var(--clr-primary-7);
    }

    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
            position: absolute;
            top: -20px;
            right: -20px;
            font-size: 1.5rem;
        }
    }

    .nav-links {
        display: none;
    }

    .cart-btn-wrapper {
        display: none;
    }

    @media (min-width: 1160px) {
        .logoTitle {
            font-size: 2rem;
        }

        .logoTitle span {
            font-size: 3rem;
        }

        .nav-header {
            margin-top: 0;
            img {
                width: 120px;
            }
        }

        .nav-toggle {
            display: none;
        }

        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }

        .nav-links {
            display: flex;
            justify-content: flex-end;
            font-family: 'Kranky', cursive;

            li {
                margin: 0 0.5rem;
            }

            a {
                color: var(--clr-grey-3);
                font-size: 1.5rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: var(--spacing);
                padding: 0.5rem;
                &:hover {
                    border-bottom: 2px solid var(--clr-primary-7);
                }
            }
        }

        .cart-btn-wrapper {
            display: grid;
        }
    }
`;

export default Nav;
