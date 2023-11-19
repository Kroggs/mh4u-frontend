import LoginForm from "@/src/components/Login/LoginForm";
import { selectAuthState } from "@/store/reducers/authReducers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Login = () => {

    const authState = useSelector(selectAuthState);
    const router = useRouter();

    useEffect(() => {
        if(authState){
            router.replace('/');
        }
    }, [authState])
    

    return (
        <LoginForm />
    )
}

export default Login;