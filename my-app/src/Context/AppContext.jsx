import React, { useState } from "react";



export const AuthContext =React.createContext()


export default function AppContextProvider({children}){
        const [auth,setAuth] = useState({})

    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}