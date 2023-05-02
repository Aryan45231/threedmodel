import { Route , Routes } from "react-router-dom";
import SigninScreen from "../Screens/Authentication/SigninScreen";
import RegisterScreen from "../Screens/Authentication/RegisterScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import ModelScreen from "../Screens/Models/ModelScreen";


const RoutesProvider = ()=>{
    return(
         <Routes>
        <Route path="/" element ={<HomeScreen/>} />
       <Route path="/signin" element={<SigninScreen/>} />
       <Route path="/register" element={<RegisterScreen/>} />
       <Route path="/model/:filename" element={<ModelScreen/>}/>
       </Routes>
       )
}
export default RoutesProvider