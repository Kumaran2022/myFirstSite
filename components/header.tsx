
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery"
import axios from "axios"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = ({ninjas}:any) =>{
  
    const [state, setState] = useState<any>([])
    const showAlert = (isIcon:string) => {
        $('#alert').slideUp()
    }
    console.log(ninjas);
    useEffect(()=>{
       axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_parent_categories")
       .then(res=>setState(res.data.message))
    },[])
    console.log(state);
    const url = "https://thefishclub.tridotstech.com"

return(<>
       <div className="header_align">
           <div >
              <a href="#">About us</a>
              <a href="#">My number</a>
              <a href="#">Wish List</a>
              <a href="#">OrderTracking</a>
           </div>   
           <div>
               Get great devices up to 50% off View details
               </div>          
           <div>
               <div>Need help? Call Us:
                 + 1800 900
                <span><a>English</a>
                 <a>USD </a></span> </div>                
               </div>                 
       </div>
       <div className="header_align">
           <div>
           <Image src="https://thefishclub.tridotstech.com//files/fish-club-logo 1.svg" alt="brand" width={100} height="50px"/>
           </div>
           <div>
           <input placeholder="Search" className="input" style={{width:"500px",marginLeft:"300px"}}></input>
           <i className="fas fa-search" />
           </div>
           <div className='icons_align'>
               <div>
               <i className="fa fa-code-compare icon_design">
               </i><span>compare</span>
               </div>
           <div> <i className="far fa-heart icon_design"></i><span>Wishlist</span></div>
           <div> <i className="fa fa-cart-shopping icon_design"></i><span>Cart</span></div>
           <div> <i id='alert' className="far fa-user icon_design"></i><span>Account</span></div>
           </div>
       </div>
       <div className='header_align'>
         <div><button  className='btn btn-success' onClick={()=>showAlert("icon_on")}>Browse All Catogories</button></div>
         <div className='icons_align'>
             {state.map((items:any)=>(
                 <div key={items.name}>
             <Link href={"/"+items.route}><a><Image  src={url+items.mobile_image} width="25px"height="25px"/></a></Link>
                 </div>
             ))}
             {/* <Link href={"chicken"}>link</Link> */}
             {/* <a href='#'>Home</a>
             <a href='#'>About</a>
             <a href='#'>Shop</a>
             <a href='#'>Vendoes</a>
             <a href='#'>Mega menu</a>
             <a href='#'>Blog</a>
             <a href='#'>Pages</a>
             <a href='#'>{ninjas ? "true" : "false"}</a> */}


         </div>
         <div>1900 - 888
24/7 Support Center</div>
           </div>
       
    </>)
}

export default Header

 