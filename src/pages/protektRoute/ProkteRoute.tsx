import React from 'react'
import {Outlet,Navigate} from "react-router-dom"

const ProkteRoute:React.FC = () => {
    const data=localStorage.getItem("user")
    const user=data?JSON.parse(data):""
    return (
      <>
        {user!==""?<Outlet /> : <Navigate to={`/login`} />}
      </>
    )
}

export default ProkteRoute