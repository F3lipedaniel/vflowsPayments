import React, { createContext, useState} from "react";


export const AuthContext = createContext()

export function AuthProvider ({children}) {
    const [cnpj, setCnpj] = useState();
    const [auth, setAuth] = useState(false, "")
    return (
        <AuthContext.Provider value={{auth, setAuth, cnpj, setCnpj}}>
            {children}
        </AuthContext.Provider>
    )
}



