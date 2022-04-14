import { signup, signIn } from "./auth";

let AuthContext = React.createContext(null);

function AuthProvider({children}) {
    const value = { 
        signup, 
        signIn
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; 
    

}