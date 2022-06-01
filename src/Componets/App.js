import React from 'react';
import SearchInput from './Search';
import axios from 'axios';
import ImageList from './imageList';
import Navbar from './Navbar';
import ThemeContextProvider from '../Contexts/ThemeContext';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Card from './Card';
import Todo from './Todo';
import './index.css';
import  AuthContextProvider  from '../Contexts/AuthContext';
import TableList from './TableList';
import TodoListContextprovider  from '../Contexts/TodoListContext';



// class App extends React.Component{
//     state ={images:[]}
//     onSearchSubmit= async(entry)=>{
        
//      const response=await   axios.get(`https://pixabay.com/api/?key=27528786-33b78f0242204e40875b74515&q=${entry}&image_type=photo`);
//      console.log(response.data.hits);
//      this.setState({images:response.data.hits})
//     }
//     render(){
//         return(
//             <div className='ui container' style={{marginTop:'30px'}}>
//                 <SearchInput onSearchSubmit={this.onSearchSubmit}/>
//               <ImageList images={this.state.images}/>
//             </div>
//         )
//     }
    
// }
// function App(){
//     return(
//         <Router>
//         <div className='App'>
//             <Navbar/>
//             <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user" component={Card} />
//       </Routes>
           
//         </div>
//         </Router>
//     );
// }
function App(){
    return(
        <div className="App">
            <div className="ui raised very padded text container segments">
                <AuthContextProvider>
                    <TodoListContextprovider>
                <ThemeContextProvider>
               <Navbar/>
               <Todo/>
               </ThemeContextProvider>
               </TodoListContextprovider>
               </AuthContextProvider>
            </div>
        </div>

    )
}
// function App(){
//     return(
//         <div className='App'>
//             <TableList/>
//         </div>
//     )
// }
export default App;