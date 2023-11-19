import { messages } from "@/constants/messages";
import { retrieveToken } from "@/services/auth/auth";
import { selectAuthState, setAuthState } from "@/store/reducers/authReducers";
import { message } from "antd";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { publicRuntimeConfig } = getConfig();

type Props = {
    children?: ReactNode;
};

const Authenticated = ({children}: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const authState = useSelector(selectAuthState);

    const errorRedirect = () => {
        const href = window.location.href;
        message.error(messages.login.error.general);
        router.push(publicRuntimeConfig.APP_NAME + 'login?r' + href, undefined, {shallow: true});;
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            try {
                retrieveToken().then(
                    (token) => {
                        if(token) {
                            if(!authState) message.success(messages.login.success(publicRuntimeConfig.APP_NAME));
                            dispatch(setAuthState(true));

                            //get user profile
                        } else {
                            errorRedirect();
                        }
                    }
                )
            } catch(e) {
                dispatch(setAuthState(false));
                errorRedirect();
            }
        }
    }, [dispatch, router])


    return <>{children}</>;

}


export default Authenticated;