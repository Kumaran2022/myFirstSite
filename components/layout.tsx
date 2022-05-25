import Head from "next/head"

import Home from "../pages/home"
 const Layout = ({children}:any) =>{
   return(
     <>
     <Head>

     </Head>
        <Home/>
        {children}
     </>
   )
 }
 export default Layout