import React, { useContext } from 'react'
import Components from "../../Components/index"
import ScreenComponents from "./Components/index"
import homeViewModel from './HomeViewModel'
import { modelContext } from '../../Contexts'
import "./HomeScreen.css"
const HomeScreen = () => {
    const {models} = useContext(modelContext)
    const {} = homeViewModel()
    return (
        <Components.NavigationPanel>
            <div className='HomeContainer'>
                {
                    models.map((ele)=>{
                       return <ScreenComponents.ModelCard 
                       modelName={ele.modelname}
                       key={ele._id}
                       filename={ele.file}
                       />
                    })
                }
            </div>
        </Components.NavigationPanel>
    )
}
export default HomeScreen
