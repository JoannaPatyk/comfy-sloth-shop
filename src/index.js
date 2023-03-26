import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Auth0Provider
        domain="dev-nuocowrkusgom6ku.us.auth0.com"
        clientId="70JD6BENyHkOpHJeuXYac1nSci87ORic"
        redirecUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
