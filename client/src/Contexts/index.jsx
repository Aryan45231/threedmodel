import { createContext, useState } from "react";

export  const  modelContext = createContext(null)
const ModelProvider = ({children})=>{
    const [models , setModels] = useState([])
    return <modelContext.Provider value={{models, setModels}}>
    {children}
    </modelContext.Provider>
}
 export default ModelProvider