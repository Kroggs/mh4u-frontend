import LoginForm from "@/src/components/Login/LoginForm";
import { selectAuthState } from "@/store/reducers/authReducers";
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { message } from "antd";
import { messages } from "@/constants/messages";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Home = () => {

    const authState = useSelector(selectAuthState);

    useEffect(() => {
        if(authState){
            message.success(messages.login.success(publicRuntimeConfig?.APP_NAME))
        }
    }, [authState])

    return authState ? (
        <h1>
            hey mec
        </h1>
    ) : (
        <LoginForm/>
    );
}

export default Home;