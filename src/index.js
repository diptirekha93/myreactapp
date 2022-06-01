import React from "react";
import ReactDOM  from "react-dom";
import DR1 from './image/DR1.jpg';
import SingleComment from "./SingleComment";
  import UserCard from "./UserCard";
  import HemisphereDisplay from "./Hemisphere";
  import App from './Componets/App';
  //import {createStore} from 'redux';
  import {createStore} from 'redux';
  import { Provider } from "react-redux";
  import rootRedeucer from "./reducers/rootRedeucer";
 
//import  createRoot  from 'react-dom/client';
// class App extends React.Component{
  
//     state={latitude:25,errormessage:''}
//   componentDidMount(){
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>{this.setState({latitude:position.coords.latitude})}
//       ,
//       (error)=>{this.setState({errormessage:error.message})}
//     );
//   }
//   render(){
    
//      if(this.state.errormessage && !this.state.latitude){
//        return <div>{this.state.errormessage}</div>
//      }
//     if(!this.state.errormessage && this.state.latitude){
//       return <div><HemisphereDisplay>latitude={this.state.latitude}</HemisphereDisplay></div>
//     }
//   }
// }
// const App =()=>{

//   window.navigator.geolocation.getCurrentPosition(
//   (position)=>console.log(position),
//   (error)=>console.log(error)
//   );
//     const buttonText = {text:'Click Me!'};
//     return (
//         <div className="ui comments">
//             <UserCard name="Alex">
//           <SingleComment name="Alex" date='Today at 4:00pm' text='it is amazing'/>
//           </UserCard>
//           <UserCard name="Jack">
//           <SingleComment name="Jack" date='Today at 5:00pm'  text='it is crazy'/></UserCard>
//           <UserCard name="sarah"> <SingleComment name="sarah" date='Today at 6:00pm'  text='it is good job'/></UserCard>
//            </div>
//     )
// }
const store = createStore(rootRedeucer);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
)
