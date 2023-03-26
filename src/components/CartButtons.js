import React from 'react';
import { TfiShoppingCartFull, TfiPowerOff, TfiUser } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items, clearCart } = useCartContext();
    const { loginWithRedirect, myUser, logout } = useUserContext();
    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
                <span className="cart-container">
                    <TfiShoppingCartFull />
                    <span className="cart-value">{total_items}</span>
                </span>
            </Link>
            {myUser ? (
                <button
                    type="button"
                    className="auth-btn"
                    onClick={() => {
                        clearCart();
                        localStorage.removeItem('user');
                        logout({ returnTo: window.location.origin });
                    }}
                >
                    <TfiPowerOff />
                </button>
            ) : (
                <button type="button" className="auth-btn" onClick={loginWithRedirect}>
                    <TfiUser />
                </button>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 80px;

    .cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--clr-grey-1);
        letter-spacing: var(--spacing);
        color: var(--clr-grey-1);
    }

    .cart-container {
        position: relative;
        display: flex;
        align-items: center;
        svg {
            height: 1.6rem;
            margin-left: 2px;
        }
    }

    .cart-value {
        position: absolute;
        top: -15px;
        right: -18px;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--clr-white);
        padding: 12px;
        background: var(--clr-primary-5);
    }

    .auth-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-color: transparent;
        font-size: 1.5rem;
        color: var(--clr-grey-1);
        letter-spacing: var(--spacing);
        cursor: pointer;
        svg {
            margin-left: 5px;
        }
    }
`;
export default CartButtons;
