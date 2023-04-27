import React, {useEffect} from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthDetails = () => {

    const [user, setUser] = useEffect(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user)
            {
                setAuthUser(user)
            
            }
            else{
                setAuthUser(null);
            }
                    })
    }, [])

    return (
        <div>
            {authUser ? <> <p> Signed In</p></> : <p> Signed out </p>}
        </div>
    )
}
export default AuthDetails