import { useContext, useEffect } from "react";
import { ModelServices } from "../../Data/Api";
import  {modelContext} from "../../Contexts/index"

const homeViewModel = async()=>{
    const modelServices = new ModelServices()
    const { setModels} = useContext(modelContext)
    const getModelData = async ()=>{
        const data = await modelServices.getModelData()
        setModels([...data.data])
    }
   useEffect(()=>{
    getModelData()
   },[])
    return {

    }
}
export default homeViewModel