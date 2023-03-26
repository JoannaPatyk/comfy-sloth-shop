import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth0();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired
};

export default PrivateRoute;
