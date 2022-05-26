import Slider from "react-slick"
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const relatedProducts = ({products}:any) =>{
   
      const data =products.data.related_products
      const length = data.length
      console.log(length)
      const url = "https://thefishclub.tridotstech.com"
      const rating = [1,2,3,4,5] 
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: length < 4  ? length : 4,
        slidesToScroll: 1
      };
    return(
        <>
 <div className="container">
        <h5>Related Items</h5>
        <Slider {...settings}>
         {data.map((items:any)=>(
              <div key={items.name} className="card category_card_design" style={{width:"260px"}}>
              <div>
                  <Link href={"/get/"+items.route}>
                  <Image src={items.product_image.startsWith("http") ? 
                  items.product_image :url+ items.product_image} 
                  alt="" width="260px" height="150px"/>
                  </Link>                      
              </div>
              <div className="card-body" style={{ float: "left",width:"100%" }}>
                               <div>
                               <h6>{items.item}</h6>
                                   <div className="ratings">
                                       {rating ? rating.map((items:any)=>(
                                      <FontAwesomeIcon icon={faStar} size={"sm"} color={items<4 ?"yellow":"lightgrey"}/>
                                       )):""
                                      }
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
          </div>
         ))}
        </Slider>
      </div>
        </>
    )
}
export default relatedProducts