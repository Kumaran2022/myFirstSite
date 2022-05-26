
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery"
import Header from "../redux/container/header"

export const getStaticProps = async(context:any) =>{
    const response = await fetch("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_parent_categories")
    const data = await response.json()  
    return {
           props : {ninjas : data}
       }
}
const header = ({ninjas}:any) =>{
    const showAlert = (isIcon:string) => {
        $('#alert').slideUp()
    }
    console.log(ninjas);
    
return(<>
       <Header/>       
    </>)
}

export default header

 