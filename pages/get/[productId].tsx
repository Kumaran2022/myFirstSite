import axios from "axios"
import Image from "next/image"
import $ from "jquery"
import Slider from "react-slick"
import Skeleton from "react-loading-skeleton"
import { useState,useEffect } from "react"
import Link  from "next/link"
import RelatedProducts from "../../components/relatedProducts"



// export const getStaticPaths = async() =>{
//     return{
//         paths : [
//             {params: {get:"chicken"}},
//            { params :{get:"fish"}}
//     ],
//     fallback:false,
//     }
// }

export const getServerSideProps = async(context:any) =>{
        const {params} = context
        const {productId} = params
        const response = await axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.mobileapi.get_product_details?route="+productId+"")
        const data = await response.data.message
        return {
          props:{
            data
          }
        }
}

const GetApiData = (props :any) =>{
const [isLoading,setIsloading] = useState<any>(true)
const [state,setState] = useState<any>([])
const obj = {
  name:"",
  weight:""
}
    console.log(props);
    const data = props.data
    const url = "https://thefishclub.tridotstech.com"  
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      const weightSubmit = (weight:any,name:any) => {
        obj.name=name
        obj.weight=weight
        
     console.log(obj)
  }
//        useEffect(()=>{
//      axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_category_products?route=chicken")
//     .then ((response:any)=>setState(response.data.message))
// setIsloading(false)
//       },[]) 
      
    return (
        <>
        <div className="container">
        <div className="row">
           <div className="col">
           </div>
           <div className="col-md-10 categoryList_card_design">
           <div className="container" style={{ marginTop: "5%" }}>
            <div>home {">"} chicken</div>
               <div className="row">
                   <div className="col" style={{padding:"1%"}}>
                       <img src={data.product_image.startsWith("http") ? data.product_image : url+data.product_image }
                        alt="chicken"></img>                    
                   </div>
                   <div className="col" style={{padding:"1%"}}>
                      
                    
                       <div>
                       <h5 style={{ fontWeight: "bold"}}>{data.meta_title}</h5>
                       <div style={{ fontWeight: "bold",opacity:"0.8"}}>{data.short_description}</div>
                    <p style={{fontSize:"smaller",opacity:"0.5",fontWeight:"bold"}}>gross wt:{data.gross_weight}grm</p>
                    <h4 style={{ color: "#ff3e00",fontWeight: "bold",marginBottom:"3%"}}>₹{data.price}</h4>
                    <h6 style={{ fontWeight: "bold"}}>
                        {data.product_attributes.map((item:any)=>item.attribute)}</h6>
                    <div className="btn_Group">
                    {data.product_attributes.map((item:any)=>item.options.map((val:any,index:any)=>(
                        <button key={index} onClick={()=>weightSubmit(val.option_value,val.name)} className="btn btn-sm btn_grms"><span style={{marginRight:"10px"}}>
                        <input id={val.option_value} name={"weight"} type={"radio"} ></input></span>{val.option_value}</button>
                    )))}
                    </div>
                    <div className="btn_Group">
                    <button className="btn btn_AddDesign"                                         
                    style={{backgroundColor:"#ff3e00",color:"white",fontSize:"small"}}  
                    >
                      <span style={{marginRight:"10px"}}><i className="fas fa-shopping-cart"></i></span>Add</button>
                     <button className="btn btn_likeAndShare"><span><i className="far far fa-heart"></i></span></button>
                     <button className="btn btn_likeAndShare"><span><i className="far fas fa-share"></i></span></button>
                    </div><br/><br/>
                    <div style ={{fontWeight:"bold"}}>Ratings & Reviews</div><br/>
                    <div className="for_cardFlex">
                        <div>No erviews Yet</div>
                        <Link href="/contacts_list">
                            <button className="btn btn-sm"style={{border:"1px solid grey"}}>
                           + Add Review
                        </button>
                        </Link>
                    </div>
                       </div>
                   </div>
               </div>
            </div><br/>            
            </div>
        </div>
        </div>
        
        
        <RelatedProducts products={props}/>
        </>
    )
}
export default GetApiData