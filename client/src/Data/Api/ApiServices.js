import { AppExcaptions } from "../ApiException.js";
export class ApiServices {
  getPostRequest = async (url, body , data_type) => {
    // creating body that has to be send on the server
    const requestBody = this.createRequestBody("POST", body, data_type)
    try {
      // requesting on server
      const response = await fetch(url, requestBody)
      this.jsonResponse = this.returnResponse(response)
    } catch (error) {
      throw error
    }
    return this.jsonResponse;
  }
  getGetRiquest = async (url) => {
    const requestBody = this.createRequestBody("GET", {})
    try {

      const response = await fetch(url, requestBody)

      this.jsonResponse = this.returnResponse(response)
    } catch (err) {
      throw err
    }
    return this.jsonResponse;
  }
  createRequestBody = (method, body,data_type) => {   // Create the body of the request which has to send on server
    if (method === "GET") {
      return {
        method: method,
        headers: {
       
          token: `barriar ${localStorage.getItem("token")}`,
        }
      }
    }
  if(data_type==="json"){
    return {
      method: method,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    }
  }
 if(data_type==="formData"){
  return {
    method: method,
    body: body
  }
 }
  }
  returnResponse = async (response) => {     // expracting the responsenae came form  the server
    const body = await response.json();
    switch (response.status) {
      case 200:
        return body;
        break;
      case 201:
        return body;
        break;
      case 400:
        // handling the errors
         return body;
      case 404:
        throw new AppExcaptions(body.message, "Bad Request");
      default:
        throw new AppExcaptions(body.message, "Server Error");
    }
  }
}