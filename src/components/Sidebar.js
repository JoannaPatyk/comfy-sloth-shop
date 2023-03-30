import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { ImUndo2 } from 'react-icons/im';
import { links } from '../utils/constants';
import styled from 'styled-components';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext();

    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={closeSidebar}>
                        <ImUndo2 />
                    </button>
                </div>
                <ul className="links">
                    {links.map(({ id, text, url }) => {
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="footer-logo">
                    <p className="logoTitle">
                        <span>t</span>he
                        <span>m</span>ost
                        <span>c</span>ozy
                        <span>s</span>hop
                    </p>
                </div>
            </aside>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    text-align: center;

    .sidebar-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 12vh;
        padding: 1rem;
        background-color: var(--clr-primary-10);
    }

    .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        transition: var(--transition);
        color: var(--clr-primary-5);
        margin-top: 0.2rem;
        cursor: pointer;
    }

    .close-btn:hover {
        color: var(--clr-primary-1);
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 76vh;
        width: 100vw;
        margin-bottom: 2rem;
    }

    .links a {
        width: 100vw;
        display: block;
        text-align: center;
        font-size: 1.8rem;
        text-transform: uppercase;
        padding: 1rem 1.5rem;
        color: var(--clr-primary-1);
        transition: var(--transition);
        letter-spacing: var(--spacing);
        font-family: 'Kranky', cursive;
        cursor: pointer;
    }

    .links a:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background-color: var(--clr-primary-8);
        color: var(--clr-white);
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        transition: var(--transition);
        transform: translate(-100%);
        z-index: -1;
    }

    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }

    .cart-btn-wrapper {
        margin: 2rem auto;
    }

    .logoTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.7rem;
        font-family: 'Kranky', cursive;
    }

    .logoTitle span {
        font-size: 1.8rem;
        color: var(--clr-primary-7);
    }

    .footer-logo {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 12vh;
        width: 100%;
        background-color: var(--clr-primary-10);
    }

    @media screen and (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export default Sidebar;
