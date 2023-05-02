import React from "react";
import ScreenComponent from "./Components/index"
import  { GoogleLogin} from "@react-oauth/google"
import "./Authentication.css"
import { Link } from "react-router-dom";
const SigninScreen = () => {
    return <ScreenComponent.AuthBackgroundPanel >
        <ScreenComponent.AUthCard >
            <div className="ManualSigninCOntainer">
                <h6> Email Address</h6>
                <input type="email" placeholder="Email Address" />
                <h6> Password</h6>
                <input type="Password" placeholder="Password" />
                <h6> Forget Password ? </h6>
                <button> Signin </button>
                <h6>Create an account with us <Link className="link" to="/register"> here.</Link> </h6>
            </div>
            <div className="SigninWithOtherAccountContainer">
               
              <div className="googleAUthContainer">
              <GoogleLogin />
              <p> Privacy policy</p>
              </div>
              <div className="termAndConditino">
               <p>Terms of service</p>
              </div>
            </div>
        </ScreenComponent.AUthCard>
    </ScreenComponent.AuthBackgroundPanel>
}
export default SigninScreen