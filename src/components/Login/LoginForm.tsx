import React, {useState} from "react";

import { Form, Input, message } from "antd";
import { Button } from "projex-ui";
import Link from "next/link";
import { regexEmail } from "../../../constants/regex";
import { messages } from "@/constants/messages";
import { login } from '../../../services/auth/login'
import { isRequestSuccessful } from "@/utils/validatedRequestStatus";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/store/reducers/authReducers";

const LoginForm = () => {

    const dispatch = useDispatch();

    const [form] = Form.useForm();
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const onLogin = async (values: {password: string; email: string}) => {
        const {password, email} = values;
        
        login(email, password)
            .then((res) => {
                setIsLoading(true);
                if(isRequestSuccessful(res.status)){
                    dispatch(setAuthState(true));
                    message.success(messages.login.success());
                }else{
                    dispatch(setAuthState(false));
                    setIsLoading(false);
                    switch(res.status){
                        case 400: message.error(messages.login.error.invalid); break;
                        case 401: message.error(messages.login.error.inactive); break;
                        default: message.error(messages.login.error.general); break;
                    }
                }
            })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Connexion à votre compte</h1>
            <Form
                form={form}
                id="login"
                initialValues={{
                    email: '',
                    password: '',
                }}
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