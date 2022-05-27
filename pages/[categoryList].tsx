import axios from "axios"
import { data } from "jquery";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export const getServerSideProps = async(context:any) =>{
    const {params} = context
    const {categoryList} = params
    const response = await axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_category_products?route="+categoryList+"")
    return {
           props : {data:response.data.message,
            loading :false       
                          }
       }
}
const CategoryList = (props:any) => {
    const [isLoading,setIsloading] = useState<any>("")
    console.log(isLoading);
    Router.events.on("routeChangeStart",(url)=>{
        setIsloading("true")
    })
    Router.events.on("routeChangeComplete",(url)=>{
     setIsloading("false");
 })
    console.log(props);
    const url = "https://thefishclub.tridotstech.com"
 

    
    return( 
        <>
        <div className="container">
        

            <div className="row">
            {isLoading == "true" ?
                        <div className="col-md C_card_design">

        <div className="card category_card_design" style={{padding:"1%"}}>
          <Skeleton height={100}></Skeleton><br/>
          <h6><Skeleton/></h6>
          <div className="for_cardFlex">
                 <h5 style={{ width:"40%" }}><Skeleton/></h5>
                 <div style={{ width:"40%" }}><Skeleton /></div>
             </div>
            </div>
            <div className="card category_card_design" style={{padding:"1%"}}>
          <Skeleton height={100}></Skeleton><br/>
          <h6><Skeleton/></h6>
          <div className="for_cardFlex">
                 <h5 style={{ width:"40%" }}><Skeleton/></h5>
                 <div style={{ width:"40%" }}><Skeleton /></div>
             </div>
            </div>
            <div className="card category_card_design" style={{padding:"1%"}}>
          <Skeleton height={100}></Skeleton><br/>
          <h6><Skeleton/></h6>
          <div className="for_cardFlex">
                 <h5 style={{ width:"40%" }}><Skeleton/></h5>
                 <div style={{ width:"40%" }}><Skeleton /></div>
             </div>
            </div>
            <div className="card category_card_design" style={{padding:"1%"}}>
          <Skeleton height={100}></Skeleton><br/>
          <h6><Skeleton/></h6>
          <div className="for_cardFlex">
                 <h5 style={{ width:"40%" }}><Skeleton/></h5>
                 <div style={{ width:"40%" }}><Skeleton /></div>
             </div>
            </div>
            </div>
             :
             <div className="col-md categoryList_card_design">
                {props.data.map((items:any)=>(
                    <div key={items.name} className="card category_card_design">
                    <div>
                        <Image src={items.product_image.startsWith("http") ? items.product_image :url+ items.product_image} 
                        alt="" width={"260px"} height="120px"/>
                    </div>
                    <div className="card-body" style={{ float: "left" }}>
                                     <h6>{items.item}</h6><br />
                                     <div className="for_cardFlex">
                                         <h5 style={{ fontWeight: "bold", color: "#484848" }}>₹{items.price}</h5>
                                         <button className="btn btn-sm btn_design"><span><i className="fas fa-shopping-cart"></i></span> add</button>
                                     </div>
                                 </div>
                </div>
                ))}               
            </div>
             }



            
            </div>
            
        </div>
        </>
    )
}
export default CategoryList


