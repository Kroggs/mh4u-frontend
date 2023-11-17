import React, {useState} from "react";

import { Form, Input, message } from "antd";
import { Button } from "projex-ui";
import Link from "next/link";
import { regexEmail } from "../../../constants/regex";
import { messages } from "@/constants/messages";
import { login } from "@/services/auth/login";
import { isRequestSuccessful } from "@/utils/validatedRequestStatus";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "@/store/reducers/authReducers";
import { useRouter } from "next/router";

const LoginForm = () => {

    const [form] = Form.useForm();
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const authState = useSelector(setAuthState);
    const dispatch = useDispatch();

    const router = useRouter();


    const onLogin = async (values: {password: string; email: string}) => {
        const {password, email} = values;
        
        setIsLoading(true);

        await login(email, password).then((res) => {
            if(isRequestSuccessful(res.status)){
                dispatch(setAuthState(true));
                setIsLoading(false);
                router.replace('/');
            }else {
                switch(res.status){
                    case 401:
                        message.error(messages.login.error.invalid);
                        break;
                    case 500:
                        message.error(messages.login.error.server)
                        break;
                    default: 
                        message.error(messages.login.error.general);
                        break;
                }
                setIsLoading(false);
            }
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Connexion à votre compte</h1>
            <Form
                form={form}
                id="login"
                name="login"
                scrollToFirstError
                onFinish={onLogin}
            >
                <Form.Item
                    hasFeedback
                    name="email"
                    rules={[
                        {required: true, message: messages.form.error.requiredFields(['email'])},
                        {pattern: regexEmail, message: messages.form.error.invalid('email')}
                    ]}
                >
                    <Input
                        autoComplete="email"
                        bordered={true}
                        placeholder="Email"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name="password"
                    rules={[
                        {required: true, message: messages.form.error.requiredFields(['mot de passe'])},
                        {min: 6, message: messages.form.error.invalid('mot de passe', '6 caractères minimum')},
                        {max: 64, message: messages.form.error.invalid('mot de passe', '64 caractères maximum')}
                    ]}
                >
                    <Input.Password 
                        autoComplete="current-password"
                        bordered={true}
                        placeholder="Mot de passe"
                        type="password"
                    />
                </Form.Item>
                <Button small htmlType="submit" loading={isLoading}>
                    Connexion
                </Button>
                <Link
                    href={email ? { pathname: '/forgot-password', query: { email} } : '/forgot-password'}
                >
                    Mot de passe oublié ?
                </Link>
            </Form>
        </div>
    );
}

export default LoginForm;