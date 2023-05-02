import "./index.css"
import  styled  from "styled-components"
const AuthBackgroundPanel = styled.div`
    height:100vh;
    width:100vw;
    background-image:url(https://media.istockphoto.com/id/1341466953/es/foto/m%C3%A1rmol-negro-abstracto-tinta-textura-l%C3%ADquido-lujo-onyx-fondo-humo-degradado-patr%C3%B3n-gris-oscuro.jpg?s=612x612&w=0&k=20&c=S7CM6QYeURKALzSMWAYwqNHvE7Ycq-tswJ0rttm3OL0=);
    background-size :cover;
    display:flex;
    align-items: center;
    justify-content:center;
`

const AUthCard = ({children}) => {
    return <div className="AUthCardMainContainer">
        <div className="BrandIMage">
            <img className="brandImage" src="https://vark.fbrk.in/assets/images/fabrik_full_logo.png" alt="" />
        </div>
        <div className="AuthCardContainer">
              {children}
        </div>
    </div>
}

export default {
    AUthCard,
    AuthBackgroundPanel
}