import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import useNavigationViewModel from './index'
const UpperBar = ({buttonFunction}) => {
  return <div className="upperBarContainer">
    <div className="HeaderContainer">
      <h1>Main Heading</h1>
      <h4> Sub Heading</h4>
    </div>
    <div className="SearchBar">
      <input type="text" placeholder='Search' />
      <button onClick={buttonFunction} > Upload</button>
    </div> 
  </div>
}
const UploadPanel = ({close , value})=>{
  const {getUploadData,uploadFileData,    setUploadPanel, uploadModel  } = useNavigationViewModel()
    
 return  value ?   <div className='uploadPanelTransparentBackground'>
      <form   className="UploadCard">
        <h1> Upload Model</h1>    
        <div className="formInputs">
        <h6>  Your Name</h6>
        <input type="text" name='uploadername' value={uploadFileData.uploadername} onChange={getUploadData} placeholder='Your Name' />
        <h6> Mode Name</h6>
          <input type="text" name='modelname' value={uploadFileData.modelname} onChange={getUploadData} placeholder='Model Name' />
          <h6> Choose file</h6>
          <input type="file" name="modelFile"  onChange={getUploadData }  placeholder='Upload Model'/>
        </div>
        <div className="ControlButtons">
        <button onClick={close} className='cancel'> Close</button>
        <button onClick={uploadModel} className='upload'> Upload</button>
        </div> 
      </form>
   </div>: ""
   
}
const MenuForUnAUthorise = () => {
  return <div className='sidePartChildCOntainer'>
    <Link className='link' to="/signin" > Login</Link>
    <Link className='link' to="/register" > Register</Link>
  </div>
}
const NavigationPanel = ({ children }) => {
  const {uploadPanel,setUploadPanel, openuploadPanel, closeUploadPanel} = useNavigationViewModel()
  return ( 
    <div className='sideBarMainContainer'>
{ 
  uploadPanel === true ?     <UploadPanel value={uploadPanel}  close={closeUploadPanel} /> : ""
}
      <div className="SidePart">
        <div className="BannerImage">
          <img src="https://vark.fbrk.in/assets/images/fabrik_full_logo.png" alt="" />
        </div>
        <MenuForUnAUthorise />
      </div>
      <div className="MainPart">
        <UpperBar   buttonFunction = {openuploadPanel} />
        <div className="ContentPanel">
          {children}
        </div>
      </div>
    </div>
  )
}

export default NavigationPanel
