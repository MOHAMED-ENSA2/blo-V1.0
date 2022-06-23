import http from "./http"
import configData from "../config/configData.json"

const apiEndPoint = configData.apiEndPoint
 

async function getPosts(){

    try{
        const res =  await http.get(apiEndPoint + "/posts" )
        const data = await res.data    
        return data 

    }
    catch(error){
        
        return console.log(error)
    
    }

   
}


export default getPosts