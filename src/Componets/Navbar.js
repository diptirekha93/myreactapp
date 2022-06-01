import React,{useContext} from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import{AuthContext} from '../Contexts/AuthContext';
// const Navbar=()=>{
//     // setTimeout(()=>{
//     // props.history.push('./about')
//     // },2000)
//     return (
//         <nav className='ui raised very padded segment'>
//             <a className='ui teal inverted segment'>Gloria</a>
//             <div className='ui right floated header'>
//                 <button className='ui button'><a href='/'>Home</a> </button>
//                 <button className='ui button'><a href='/about'>About</a> </button>
//                 <button className='ui button'><a href='/contact'>Contact</a> </button>

//             </div>
//         </nav>
//     )
// }
// class Navbar extends React.Component{
//     static contextType=ThemeContext;
//     render(){
       
//         return(
//             <AuthContext.Consumer>{(authContext)=>{
//                 return(
//             <ThemeContext.Consumer>{(themeContext)=>{
//                 const {isDarkTheme,darkTheme,lightTheme}=themeContext;
//                 const {isLoggedIn,changeAuthStatus}= authContext;
//                 const theme =isDarkTheme ? darkTheme:lightTheme;
//            return(
//             <nav style={{background:theme.background,color:theme.text,height:'120px'}}>
//                 <h2 style={{textAlign:'center'}} >
//                     ok Academy
//                 </h2>
//                 <div className='ui three buttons'>
//                    <button className='ui button'>Overview</button>
//                    <button className='ui button'>Conatct</button>
//                    <button className='ui button'>Support</button> 
//                 </div>
//             </nav>
//         )
//     }}
//     </ThemeContext.Consumer>
//         );
// }
// }
// </AuthContext.Consumer>
//         );
//     }
// }
const Navbar=()=>{
    const {isDarkTheme,darkTheme,lightTheme}=useContext(ThemeContext);
    const {isLoggedIn,changeAuthStatus}=useContext(AuthContext);
    const theme =isDarkTheme ? darkTheme:lightTheme;
    return(
        <nav style={{background:theme.background,color:theme.text,height:'120px'}}>
            <h2 style={{textAlign:'center'}} >
                ok Academy
            </h2>
            <p onClick={changeAuthStatus} style={{textAlign:'center'}}>{isLoggedIn?'logged in':'logged out'}</p>
            <div className='ui three buttons'>
               <button className='ui button'>Overview</button>
               <button className='ui button'>Conatct</button>
               <button className='ui button'>Support</button> 
            </div>
        </nav>
    )
}
export default Navbar;