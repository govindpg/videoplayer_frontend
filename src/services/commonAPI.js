import axios from "axios"

export const commonAPI= async(httpMethod,url,reqBody)=>{
       let reqconfig= {
              
                     method: httpMethod,
                     url: url,// if both are in same name it can also be named as url,
                     data: reqBody,
                     Headers:{
                            "Content-Type":"application/json"
                     }
                     
       }
       return await axios(reqconfig).then((result)=>{
              return result
       }).catch((err)=>{
              return err
       })
}