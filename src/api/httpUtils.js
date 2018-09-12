
var HTTPUtil = {
}; 

const baseUrl= "http://192.168.1.91:1212";
/** 
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */  
HTTPUtil.get = function(url, params) {  
    if (params) {  
        let paramsArray = [];  
        //encodeURIComponent  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (url.search(/\?/) === -1) {  
            url += '?' + paramsArray.join('&')  
        } else {  
            url += '&' + paramsArray.join('&')  
        }  
    }  
    return new Promise(function (resolve, reject) {  
      fetch(baseUrl + url, {  
            method: 'GET',  
            // headers: headers,  
          })  
          .then((response) => {  
              if (response.ok) {  
                  return response.json();  
              } else {  
                  reject({status:response.status})  
              }  
          })  
          .then((response) => {  
              resolve(response);  
          })  
          .catch((err)=> {  
            reject({status:-1});  
          })  
    })  
}  
  
  
/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param formData   
 * @returns {Promise} 
 */  
HTTPUtil.post = function(url, formData,successCallBack,errorCallBack) { 
    return new Promise(function (resolve, reject) {  
      fetch(baseUrl + url, {  
            method: 'POST',  
            body:formData,  
          })  
          .then((request) => {  
            console.log("request",request)
              if (request.ok) {  
                  return request.json();  
              } else {  
                  reject({status:request.status})  
              }  
          })  
          .then((response) => { 
            console.log("response",response)
            resolve(response);  
              if(response.status===0){
                  if(successCallBack){
                    successCallBack(response.data)
                  }
              }else{
                  if(errorCallBack){
                      errorCallBack(response.msg)
                  }
              }
          })  
          .catch((err)=> {  
            if(errorCallBack){
                errorCallBack(err)
            }
            reject({status:-1});  
          })  
    })  
}  
  
export default HTTPUtil;

