import React from 'react';
import {connect} from 'react-redux';
class Card extends React.Component{
    // state={user:''}
    // componentDidMount(){
    //     let user =this.props.match.params.user;
    //     this.setState({user})
    // }
    render(){
        //const{user}= this.state
        console.log(this.props);
        const {title,body} =this.props.card;
        return(
            <div>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
                <h3 className='ui header'>{title}</h3>
                <p>{body}</p>
              
            </div>
        </div>
        )
    }
}
const mapStateToprops =(state,ownprops)=>{
    let title =ownprops.match.params.users;
    return{
        cards:state.cards.find(card=>card.title === title)
    }

}
const mapDispatchToProps =(dispatch)=>{
    return{
        deleteCard:(id)=>{dispatch({type:"DELETE_CARD",id})}
    }

}
export default connect(mapStateToprops) (Card);