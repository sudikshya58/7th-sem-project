import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pages = () => {
    const isAuthenticate = localStorage.getItem('auth_token');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticate) {
            navigate('/Home');
        } else {
            navigate('/logins');
        }
    }, [isAuthenticate, navigate]);

    // Return null or some loading indicator if you prefer
    return null;
};
