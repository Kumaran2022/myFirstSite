

  export const Initialstate =  {
     name:"hendry",
     age: 12,
     parentCategory :""
 }

 const reducer = (state = Initialstate,action:any) => {
     switch(action.type){
         case "GET_USER_DETAILS" :
             return {
                 ...state,
                 parentCategory:action.data
                }
                case "SEND_PARENT_CATEGORY" :
                    return {
                        ...state,
                        parentCategory:action.category
                       }
             default :
                return state
            
     }
 }
 export default reducer