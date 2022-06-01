import React from 'react';
import  ReactDOM  from 'react-dom';
import DR1 from './image/DR1.jpg';
const SingleComment =(props)=>{
    console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img  src={DR1} alt="profile picture"/>
        </a>
        <div className="content">
            <a href="/" className="author">{props.name}</a>
            <div className="metadata">
                <span>{props.date}</span>
            </div>
            <div className="text">
              {props.text}
            </div>

        </div>
    </div>
    )
}
export default SingleComment;