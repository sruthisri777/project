import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.auth.isAuthenticated);
    let location = useLocation();

    // console.log("user is ")
    console.log(user)
    if(!user) {
        return <Navigate to="/Register" state={{ from: location}} replace={true} />
    }

 return children
 

};

export default ProtectedRoute;