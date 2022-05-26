import axios from "axios"
import { data } from "jquery";
import Image from "next/image";
import Link from "next/link";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
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
// const alpha = props.sort(dynamic(category_name))
    console.log(props);

    const url = "https://thefishclub.tridotstech.com"
    const rating = [1,2,3,4,5]
    return( 
        <>
        <div className="container">
            <div className="row">
            <div className="col">
                {/* <div className="card" style={{backgroundColor:"#ff3e00",opacity:"0.8"}}>
                    <h3>Category List</h3>
                    {props.data.map((items:any)=>(
                    <div key={items.name}>
                        <Image src={items.product_image.startsWith("http") ? items.product_image :url+ items.product_image}
                         alt="" width={"80px"} height="50px"></Image>
                         <div style={{fontSize:"small",borderBottom:"1px solid lightgray",marginBottom:"5%",
                          color:"white"}}>{items.item}</div>
                    </div>

                    ))}
                </div> */}
            </div>
            <div className="col-md categoryList_card_design">
                {props.data.map((items:any)=>(
                    <div key={items.name} className="card category_card_design">
                    <div>
                        <Link href={"/get/"+items.route}>
                        <Image src={items.product_image.startsWith("http") ? 
                        items.product_image :url+ items.product_image} 
                        alt="" width="260px" height="150px"/>
                        </Link>                      
                    </div>
                    <div className="card-body" style={{ float: "left" }}>
                                     <h6>{items.item}</h6>
                                     <div>
                                         <div className="ratings" style={{display:"flex",flexDirection:"row"}}>
                                             {rating ? rating.map((items:any,i:any)=>(
                                              <div key={i} >
                                                <FontAwesomeIcon icon={faStar} size={"sm"} color={items<4 ?"yellow":"lightgrey"}/>
                                              </div>   
                                             )):""
                                            }
                                         </div>
                                     </div>
                                     <div className="for_cardFlex">
                                         <h5 style={{ fontWeight: "bold", color: "#484848" }}>₹{items.price}</h5>
                                         <button className="btn btn-sm btn_style"
                                          style={{backgroundColor:"#ff3e00",color:"white",fontSize:"small"}}
                                          >
                                     <span><i className="fas fa-shopping-cart"></i></span> add</button>
                                     </div>
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


