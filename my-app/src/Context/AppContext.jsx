import React, { useState } from "react";



export const AuthContext =React.createContext()


export default function AppContextProvider({children}){
        const [auth,setAuth] = useState({})
        const [checkAuth,setCheckAuth]=useState(false)
        const [carData,setCarData]=useState([])

        const getCityCarData=(city)=>{
            // console.log(city)
            fetch(`http://zoomcar-servertest.herokuapp.com/${city}`)
            .then((res)=>{
              return res.json()
            })
            .then((res)=>{
              // console.log(res)
              setCarData(res)
            })
            .catch(err=>
              (console.log(err))
            )
          }

    return(
        <AuthContext.Provider value={{auth,setAuth,carData,setCarData,checkAuth,setCheckAuth,getCityCarData}}>
            {children}
        </AuthContext.Provider>
    )
}