import axios from "axios"
import Image from "next/image"
import $ from "jquery"
import Slider from "react-slick"
import Skeleton from "react-loading-skeleton"
import { useState,useEffect } from "react"

const GetApiData = (props :any) =>{
const [isLoading,setIsloading] = useState<any>(true)
const [state,setState] = useState<any>([])

    console.log(state);

    const url = "https://thefishclub.tridotstech.com"  
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
       useEffect(()=>{
     axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_category_products?route=chicken")
    .then ((response:any)=>setState(response.data.message))
setIsloading(false)
      },[]) 
      
    return (
        <>
        <div className="row">
           <div className="col">
             {state ? <Skeleton/>:<Skeleton/>}
           get data from static api<Skeleton/>
           </div>
           <div className="col-md-10 categoryList_card_design">
               
                {state ? 
                state.map((items:any)=>(
                    <div key={items.name} className="card category_card_design">
                    <div>
                        <Image src={items.product_image.startsWith("http") ? items.product_image :url+ items.product_image} 
                        alt="" width={"200px"} height="100px"/>
                    </div>
                </div>
                )):            <Skeleton/>
              }
                              
            </div>
        </div>
        <div>
             </div>
        </>
    )
}
export default GetApiData