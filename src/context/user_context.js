import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const { loginWithRedirect, logout, user } = useAuth0();

    const [myUser, setMyUser] = useState(null);

    useEffect(() => {
        setMyUser(user);
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                loginWithRedirect,
                logout,
                myUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useUserContext = () => {
    return useContext(UserContext);
};
