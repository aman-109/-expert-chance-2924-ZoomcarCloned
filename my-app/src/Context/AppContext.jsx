import React from "react";



export const AuthContext =React.createContext()


export default function AppContextProvider({children}){
        

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}