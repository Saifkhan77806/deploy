import axios from "axios";
import { createContext, useContext, useState, useEffect, useMemo, useLayoutEffect } from "react";

export const AuthContext = createContext();


export const Authprovider = ({children}) =>{
     

   

     
     const [user,setUser] = useState()
     const [userId, setUserId] = useState();
     const [userEmail, setUserEmail] = useState("")
   

     // const navigate = useNavigate()
     const [userData,setUserData] = useState()
  useEffect(()=>{
    axios.get("https://backend-kappa-drab.vercel.app/linkedin/success").then((res)=>{
      setUserData(res.data)
      console.log("from user",res.data)

      if(res.data.logtype=="user already exist"){
          console.log("user exist")
          // window.open("https://backend-ashen-gamma.vercel.app/logout")
      }

     //  access from user database
      axios.get(`https://backend-ashen-gamma.vercel.app/userid/${res.data.type?.id}`).then((res)=>{
       console.log(res.data)
       setUser(res.data)
      }).catch((err)=>{
       console.log("user id err", err)
      })
     })

  },[])

     return <AuthContext.Provider value={{ userData, user }}>
            {children}
            </AuthContext.Provider>

}

export const useAuth = () =>{
     const authContextValue = useContext(AuthContext);
     if(!authContextValue){
          throw new Error("UseAuth used Outside of the provider");
     }
     return authContextValue;
}