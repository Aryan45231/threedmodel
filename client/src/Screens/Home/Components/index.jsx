import styled from "styled-components"
import "./index.css"
import { Link } from "react-router-dom"
import * as screenshotone from 'screenshotone-api-sdk';
import { AppUrl } from "../../../Data/Resource/Apiurl"
import { useEffect, useState } from "react"
const ModelCard = ({
    modelImage = "https://media.istockphoto.com/id/512550372/vector/ramadan-kareem-lantern.jpg?s=2048x2048&w=is&k=20&c=FtevppKJ1VoV6tEsTSGcWYO8yuNc8nM8jhTsfPDIWdc=",
    modelName = " 3D Model",
    filename = "#",
    ownerName = "Aryan Jaiswal",
}) => {
  const [image ,setImage] = useState("")

    const appurl = new AppUrl()
    return<Link  to={`/model/${filename}`} className="ModelCaard">
    <h1>
       {modelName}
    </h1>
    </Link>

    
 
}
export default {
    ModelCard
}