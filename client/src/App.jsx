import ModelProvider from "./Contexts"
import RoutesProvider from "./Routes/Index"
import SigninScreen from "./Screens/Authentication/SigninScreen"
import { GoogleOAuthProvider } from '@react-oauth/google'
const App = () => {
   const clientId = "553185404178-vkj25lpnd7c2o46ggnu3mrj818overst.apps.googleusercontent.com"
   return <GoogleOAuthProvider clientId={clientId}>
      <ModelProvider>
         <RoutesProvider />
      </ModelProvider>
   </GoogleOAuthProvider>


}

export default App


// 553185404178-vkj25lpnd7c2o46ggnu3mrj818overst.apps.googleusercontent.com
