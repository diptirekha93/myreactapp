import React from 'react';
import DR1 from './image/DR1.jpg';
const UserCard=(props)=>{
return(
    <div className='ui card'>
        <div className='content'>
            <div className='header'>{props.name}</div>
            <div className='description'>
               {props.children}
            </div>
        </div>
        <div className='ui bottom button'>
            <i className='add icon'></i>
            Add Friend
        </div>
    </div>
)
}
export default UserCard;