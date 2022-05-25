import axios from "axios"
import Image from "next/image"
import $ from "jquery"
import Slider from "react-slick"
import Skeleton from "react-loading-skeleton"
import { useState,useEffect } from "react"



// export const getStaticPaths = async() =>{
//     return{
//         paths : [
//             {params: {get:"chicken"}},
//            { params :{get:"fish"}}
//     ],
//     fallback:false,
//     }
// }

// export const getStaticProps = async(context:any) =>{
//     const {params} = context
//     const{get} = params
//     const response =await axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_category_products?route="+get+"")
//     const data = await response.data
//     return {
//         props :{
//             data:data.message,get,loading:false
//         }
//     }
// }

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
        {/* <div className="container">
        <Slider {...settings}>
            <h1>slide1</h1>            
            <h1>slide2</h1>
            <h1>slide3</h1>
            <h1>slide4</h1>
             <h1>slide1</h1>            
            <h1>slide2</h1>
            <h1>slide3</h1>
            <h1>slide4</h1>
         </Slider>
        </div> */}
        <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
              <div style={{height:"100px",width:"100px"}} className="
              card">
dfdfdf  
              </div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
        </>
    )
}
export default GetApiData