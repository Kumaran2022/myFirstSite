import axios from "axios"
import { data } from "jquery";
import Image from "next/image";

export const getServerSideProps = async(context:any) =>{
    const {params} = context
    const {categoryList} = params
    const response = await axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_category_products?route="+categoryList+"")
    return {
           props : {data:response.data.message       
                          }
       }
}
const categoryList = (props:any) => {
    console.log(props);
    const url = "https://thefishclub.tridotstech.com"

    return( 
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
                {/* <div className="card">
                    <h3>Category</h3>
                    <select>All</select>
                    {props.data.map((items:any)=>(
                    <div key={items.name}>
                        <Image src={items.product_image.startsWith("http") ? items.product_image :url+ items.product_image}
                         alt="" width={"80px"} height="50px"></Image>
                    </div>

                    ))}
                </div> */}
            </div>
            <div className="col-md-10 categoryList_card_design">
                {props.data.map((items:any)=>(
                    <div key={items.name} className="card category_card_design">
                    <div>
                        <Image src={items.product_image.startsWith("http") ? items.product_image :url+ items.product_image} 
                        alt="" width={"200px"} height="100px"/>
                    </div>
                </div>
                ))}
                
            </div>
            </div>
            
        </div>
        </>
    )
}
export default categoryList


