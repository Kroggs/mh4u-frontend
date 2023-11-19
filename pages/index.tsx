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

    return (
        <h1>
            Welcome ! 
        </h1>
    );
}

export default Home;