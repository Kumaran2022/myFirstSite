import Head from "next/head"
import SideNavBar from "../redux/container/sideNavBar"

import Home from "../pages/home"
 const Layout = ({children}:any) =>{
   return(
     <>
        <Home/>
        {/* <SideNavBar/> */}
        {children}
     </>
   )
 }
 export default Layout