import { useState } from "react";
type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
    const [user,setUser]=useState<UserType|null>(null);

    const loginHandler=()=>{
        setLogin(true);
        setUser({name:"Code",email:"Email@"})
    }
    const logoutHandler=()=>{
        setLogin(false);
        setUser(null)
        
    }
    return (
        <>
           <div> {isLoggedIn?'Logged in':'Logged out'}</div>
            {user?.name} {user?.email}
            <button onClick={loginHandler}>Log in </button>
            <button onClick={logoutHandler}>Log out</button>
        </>
    )
}
export default Login;
