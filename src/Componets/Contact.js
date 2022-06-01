import React from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Contact=({cards})=>{
    return(
        <div>
            {
            cards.map(card=>{
                    return(
                        <div className='ui raised very padded text container segment' style={{marginTop:'80px'}} key={card.id}>
                        <Link  to = {`/${card.title}`}className='ui header'>{card.title}</Link>
                        <p>{card.body}</p>
                    </div>  
                    )
                })
            }
            {/* <Modal/>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
                <h3 className='ui header'>Contact</h3>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
            </div> */}
        </div>
    )
}

const mapStateToprops=(state)=>{
    return {
        cards:state.cards
    }
}
export default connect(mapStateToprops) (Contact);