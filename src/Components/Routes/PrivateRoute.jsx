import React from 'react';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({Children}) => {
    const z =1 ;
    
        if(z==1){return Children} 
    
     <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;