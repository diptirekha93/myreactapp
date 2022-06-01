import React from "react";
import northenpic from './image/northernhemisphere.jpg';
import southernpic from './image/southernhemisphere.jpg';
import './Hemisphere.css';
const hemispherConfig={
    Northern:{
        text:'it is northen hemishpere',
        picture:northenpic
    },
    Southern:{
        text:'it is southern hemishpere',
        picture:southernpic
    }
}
const HemisphereDisplay =({latitude})=>{
    const hemisphere=latitude > 0 ?'Northern':'southern';
    const {text,picture} = hemispherConfig[hemisphere];
    return(
        <div className={hemisphere}>
          <img src={picture} alt="hemisphere picture"/>
          {text}
        </div>
    )
}
export default HemisphereDisplay;