import React ,{createContext,useState} from 'react';
export const  AuthContext = createContext();
const  AuthContextProvider =({children})=>{
   const [isLoggedIn,setIsloggedIn]= useState(false);
    // state={
    //     isLoggedIn:false
    // };
  const  changeAuthStatus=()=>{
      //  this.setState({isLoggedIn:!this.state.isLoggedIn});
      setIsloggedIn(!isLoggedIn);
    };
   // render(){
        return(
            <AuthContext.Provider value={{isLoggedIn,changeAuthStatus}}>
                {children}
            </AuthContext.Provider>
        )
   // }
}
export default AuthContextProvider;