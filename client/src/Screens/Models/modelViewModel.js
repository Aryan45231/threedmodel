import { useEffect, useState } from "react";
import { ModelServices } from "../../Data/Api";
 import {  AppUrl } from "../../Data/Resource/Apiurl";
import { useParams } from "react-router-dom";
const useRenderViewModel  =  ()=>{
    const params  = useParams()
    const  appUrl = new AppUrl() 
    const [fileurl ,setFileUrl] = useState(`${appUrl.baseUrl}/${params.filename}`)
    return{
            fileurl
    }
}
export default useRenderViewModel