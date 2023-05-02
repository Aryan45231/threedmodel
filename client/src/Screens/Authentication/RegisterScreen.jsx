
import { Link } from "react-router-dom"
import ScreenComponent from "./Components/index"

const RegisterScreen = () => {
    return <ScreenComponent.AuthBackgroundPanel >
        <ScreenComponent.AUthCard>
            <div className="ManualSigninCOntainer">
                <div className="inputContainer">
                    <div className="inputContainerLeftSide">
                     <h6>First Name</h6>
                     <input type="text" placeholder="First Name" />
                    </div>
                    <div className="InputCOntainerRightSide">
                    <h6>Last Name</h6>
                    <input type="text" placeholder="Last Name" />
                    </div>
                </div>
                <h6> Email Address</h6>
                <input type="email" placeholder="Email Address" />
                <div className="inputContainer">
                    <div className="inputContainerLeftSide">
                    <h6>Password</h6>
                    <input type="password" placeholder="Password" />
                    </div>
                    <div className="InputCOntainerRightSide">
                    <h6>Confirm Password</h6>
                    <input type="password" placeholder="Confirm Password" />
                    </div>
                </div>

                <button> Register </button>
                <h6>Already registered? <Link className="link" to="/signin"> Sign in </Link> .</h6>

            </div>
            <div className="SigninWithOtherAccountContainer">

                <div className="googleAUthContainer">
                    <p> Privacy policy</p>
                </div>
                <div className="termAndConditino">
                    <p>Terms of service</p>
                </div>
            </div>

        </ScreenComponent.AUthCard>
    </ScreenComponent.AuthBackgroundPanel>
}
export default RegisterScreen