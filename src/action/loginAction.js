//import * as types from './actionType';
import * as httpUtils from '../api/httpUtils';
export let login = (userName,password)=>{
    let formData = new FormData();  
    formData.append("userName",userName); 
    formData.append("password",password);
    return dispatch =>{
        httpUtils.default.post("/login",formData,(data)=>{

        }),
        (msg)=>{


        }
    
    }
}