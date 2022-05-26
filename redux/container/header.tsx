import { connect } from "react-redux";
import Header from "../../components/header";
import { getDetails,sendParentCategory } from "../action";



const mapStateToProps = (state:any) =>{
    return{
  value :state
    }
}

const mapDispatchToProps = (dispatch:any) =>({
    getDetailsController : ()=>dispatch(getDetails()),
    sendParentCategory  : (categories:any)=>dispatch(sendParentCategory(categories))
})

export default connect (mapStateToProps,mapDispatchToProps)(Header)