import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-[#ff4a51] text-lg" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;