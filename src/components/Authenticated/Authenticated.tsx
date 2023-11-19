import { messages } from "@/constants/messages";
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

    useEffect(() => {
        if(typeof window !== 'undefined'){
            try {

            } catch(e) {
                dispatch(setAuthState(false));
                const href = window.location.href;
                message.error(messages.login.error.general);
                router.push(publicRuntimeConfig.APP_NAME + 'login?r' + href, undefined, {shallow: true});
            }
        }
    }, [dispatch, router])


    return <>{children}</>;

}


export default Authenticated;