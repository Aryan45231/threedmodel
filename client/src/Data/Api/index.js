import { ApiServices } from "./ApiServices";
import { AppUrl } from "../Resource/Apiurl";
export class ModelServices {
   constructor(){
        this.url = new AppUrl()
        this.ApiServices = new ApiServices()
    }
    uploadModel= async(payload, data_type)=> 
    await this.ApiServices.getPostRequest(`${this.url.baseUrl}/uploadmodel`, payload , data_type)

    saveModelData = async (payload , data_type)=> 
    await this.ApiServices.getPostRequest(`${this.url.baseUrl}/savemodeldata`, payload, data_type)
    
    getModelData = async ()=>
    await this.ApiServices.getGetRiquest(`${this.url.baseUrl}/getmodledata`)

} 