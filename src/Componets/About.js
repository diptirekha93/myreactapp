import React from 'react';
import  './Modal.css';
const About=()=>{
    return(
        
        <div>
            <div className='wrapper'>
            {/* <div className='modal'>
                <div className='modal-content'>
                    <h3>I am a modal</h3>

                </div>
            </div> */}
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
                <h3 className='ui header'>About</h3>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
            </div>
            </div>
        </div>
    )
}
export default About;