import { useContext } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { LoginContext, UserType } from "./components/LoginContext"
type PrivateProps = {
    children: React.ReactNode
}
const PrivateRoute = (props:PrivateProps) => {
    const user = useContext<UserType | undefined>(LoginContext);
        return (
            <>
                {user?.name ?props.children:<Navigate to="/login"/>}
            </>
        )
}
export default PrivateRoute
