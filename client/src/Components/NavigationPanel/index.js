import { useContext, useEffect, useState } from "react";
import { ModelServices } from "../../Data/Api";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { modelContext } from "../../Contexts";
const useNavigationViewModel = ()=>{
    const modelServices = new ModelServices()
    const {models , setModels} = useContext(modelContext)
    const alert  = useAlert()
    const [uploadPanel , setUploadPanel] = useState(false)
    const [uploadFileData , setUploadFileData] = useState({ uploadername:"", modelname:"", file:""})
    const formData= new FormData()
    const navigate = useNavigate()
    const getUploadData = (event)=>{
        if(event.target.name==="modelFile")
              formData.append("modelFile", event.target.files[0]) 
        else
            setUploadFileData({...uploadFileData , [event.target.name]:event.target.value})
    }
    const closeUploadPanel  = (event)=>{
        event.preventDefault()
        setUploadPanel(false)
    }
    const openuploadPanel =()=>{
        return setUploadPanel(true)
    }         
    const uploadModel = async (event)=>{
      event.preventDefault()
      if( uploadFileData.uploadername !="" && uploadFileData.modelname !=""){
        const data = await modelServices.uploadModel(formData, "formData")
         if(data.error){
          alert.error(data.error)
         }
          else{
            setUploadFileData({...uploadFileData , file:data.filename})
            const res=  await modelServices.saveModelData({...uploadFileData,file:data.filename}, "json")
            alert.success("file uploaded")
            setModels([...models , {...uploadFileData , file:data.filename}])
          }
          setUploadPanel(false)
          setUploadFileData({ uploadername:"", modelname:"", file:""})
      }
    }
    return {
        uploadPanel,
        uploadFileData,
        uploadModel,
        setUploadPanel,
        uploadFileData,
        getUploadData,
        closeUploadPanel,
        openuploadPanel
    }
}
export default useNavigationViewModel