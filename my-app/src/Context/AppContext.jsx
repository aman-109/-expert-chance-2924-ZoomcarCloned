import React, { useState } from "react";



export const AuthContext =React.createContext()


export default function AppContextProvider({children}){
        const [auth,setAuth] = useState({})
        const [carData,setCarData]=useState([])

    return(
        <AuthContext.Provider value={{auth,setAuth,carData,setCarData}}>
            {children}
        </AuthContext.Provider>
    )
}