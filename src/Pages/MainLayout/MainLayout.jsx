import React from "react";
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return ( 
    <>
       <h1> main Layout </h1>
        <Outlet />
    </>
 
   );
}

export default MainLayout;