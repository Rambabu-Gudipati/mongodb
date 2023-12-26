import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import * as Helper from "./helper"


const Protected = (props:any) => {
    const {child} = props;
    const jwtToken = Cookies.get('jwt_token')
    //if valid token redirect to actual path
    if(Helper.isValidToken(jwtToken)){
        return child;
    } else {
        Cookies.remove('jwt_token')
    }
    //if invalid redirect to login
    return <Navigate to="/login"/>   
}

export default Protected    