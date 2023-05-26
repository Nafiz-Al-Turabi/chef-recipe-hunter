import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    if(loading){
        return <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <CirclesWithBar
                height="100"
                width="100"
                color="#ff4a51"
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;