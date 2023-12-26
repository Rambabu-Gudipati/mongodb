import axios from "axios";
import config from "./config";
import Cookies from 'js-cookie';

 export const getUsersById = async(id: number | undefined) => {

    const token = Cookies.get('jwt_token')
     
    try {
      const response = await axios({
        method:'get',
        url: `${config.API_DOMAIN_URL}/api/v1/users/${id}`,
         headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
               }        
      });
  
      const responseData = await response.data;
      return responseData
  
     
  
    }catch (err) {
      console.log(err);
    }
  
  }
  

export const updateUsersByIds = async(data: any | undefined) => {

  const token = Cookies.get('jwt_token')
  const reqData = JSON.stringify(data)
  try {
    const response = await axios({
      method:'POST',
      url: `${config.API_DOMAIN_URL}/api/v1/users/update`,
       headers: { 
              'Authorization': `Bearer ${token}`, 
              'Content-Type': 'application/json'
             },
             data: reqData        
    });

    const responseData = await response.data;
    return responseData

   

  }catch (err) {
    console.log(err);
  }

}
