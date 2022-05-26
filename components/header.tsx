
import { faSearch,faHeart,faCartArrowDown,faUser,faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery"
import axios from "axios"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = (props:any) =>{
  
    const [state, setState] = useState<any>([])
    const showAlert = (isIcon:string) => {
        $('#alert').slideUp()
    }
    useEffect(()=>{
        getUsers();
       
    },[])
    const getUsers = async() =>{
         await axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_parent_categories")
        .then(res=>{setState(res.data.message)
             props.sendParentCategory(res.data.message)
        })
            
    }
    const url = "https://thefishclub.tridotstech.com"
    console.log(props);
    
return(<>
<nav className='navbar navbar-expand-lg sticky-top' style={{backgroundColor:"#ff3e00",color:"white"}}>
<div className=" container-fluid">
           <div>
              <a href="#" style={{color:"white",marginLeft:"10px"}}>About us</a>
              <a href="#" style={{color:"white",marginLeft:"10px"}}>My number</a>
              <a href="#" style={{color:"white",marginLeft:"10px"}}>Wish List</a>
              <a href="#" style={{color:"white",marginLeft:"10px"}}>OrderTracking</a>
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
       </div></nav>
       
       <div className='container-fluid'>
       <div className='header_align'>
           <div style={{marginLeft:"50px"}}>
           <Image src="https://thefishclub.tridotstech.com//files/fish-club-logo 1.svg" alt="brand"  width={100} height="70px"/>
           </div>
           <div className='search'>
           <FontAwesomeIcon icon={faSearch} className="search_icon"/>
           <input type={"search"} className="form-control" placeholder='enter the product'/>

           </div>
           <div className='icons_align'>
               <div>
               <FontAwesomeIcon icon={faCodeCompare} size={"lg"} className="search_icon"/>
               <span>compare</span>
               </div>
           <div><FontAwesomeIcon icon={faHeart} size={"lg"} className="search_icon"/><span>Wishlist</span></div>
           <div><FontAwesomeIcon icon={faCartArrowDown} size={"lg"} className="search_icon"/><span>Cart</span></div>
           <div><FontAwesomeIcon icon={faUser} size={"lg"} className="search_icon"/><span>Account</span></div>
           </div>
       </div>
       <div className=' header_align' style={{padding:'1%'}}>
                    <div><button  className='btn btn-success' onClick={props.getDetailsController}>
                        Browse All Catogories</button></div>
         <div className='category_icons_align'>
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
       </div>
      
       
    </>)
}

export default Header

 