import axios from "axios"


export const getDetails =() =>{
    return(dispatch:any)=>{
       axios.get("https://thefishclub.tridotstech.com/api/method/ecommerce_business_store.ecommerce_business_store.api.get_parent_categories")
       .then(res=>{
          const data  = res.data.message
          dispatch(getUserDetails(data))
       })
    }
}

export const getUserDetails = (data:any) =>{
  return{
      type:"GET_USER_DETAILS",
      data
  }
}

export const sendParentCategory = (category:any)=>{
    return {
        type:"SEND_PARENT_CATEGORY",
        category
    }
}