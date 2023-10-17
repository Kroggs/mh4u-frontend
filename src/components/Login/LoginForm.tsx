import React, {useState} from "react";

import { Form, Input, message } from "antd";
import { Button } from "projex-ui";
import Link from "next/link";

const LoginForm = () => {

    const [form] = Form.useForm();
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const onLogin = async (values: {password: string; email: string}) => {
        const {password, email} = values;


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
            >
                <Form.Item
                    hasFeedback
                    name="email"
                    rules={[
                        {required: true, message: "nope"},
                        {pattern: new RegExp('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$'), message: "invalide"}
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
                        {required: true, message: "mdp"},
                        {min: 6, message: "charac min"},
                        {max: 64, message: "charac max"}
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