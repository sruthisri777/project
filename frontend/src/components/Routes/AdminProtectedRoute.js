import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const AdminProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.auth.isAdmin);
    let location = useLocation();

    // console.log("user is ")
    console.log(user)
    if(!user) {
        return <Navigate to="/Login" state={{ from: location}} replace={true} />
    }

 return children
 

};

export default AdminProtectedRoute;