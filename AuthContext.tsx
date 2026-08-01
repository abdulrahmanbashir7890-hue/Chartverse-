import {

createContext,

useContext,

useEffect,

useState

} from "react";

import {

onAuthStateChanged,

User

} from "firebase/auth";

import { auth } from "../firebase/firebase";

const AuthContext=createContext<any>(null);

export function AuthProvider({children}:any){

const [user,setUser]=useState<User|null>(null);

const [loading,setLoading]=useState(true);

useEffect(()=>{

const unsubscribe=onAuthStateChanged(

auth,

(currentUser)=>{

setUser(currentUser);

setLoading(false);

}

);

return unsubscribe;

},[]);

return(

<AuthContext.Provider

value={{

user,

loading

}}

>

{children}

</AuthContext.Provider>

);

}

export const useAuth=()=>useContext(AuthContext);
