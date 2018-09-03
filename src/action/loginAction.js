//import * as types from './actionType';
import * as httpUtils from '../api/httpUtils';
export let login = (userName,password,success,error)=>{
    let formData = new FormData();  
    formData.append("userName",userName); 
    formData.append("password",password);
    return dispatch =>{
        httpUtils.default.post("/login",formData,(data)=>{
            console.log("success")
          if(success){
              success(data)
          }
        }, (msg)=>{
            console.log("error")
            if(error){
                error(msg)
            }
        })
    }
}