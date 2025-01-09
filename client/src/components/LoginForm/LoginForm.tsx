import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import "./LoginForm.css";
import FormInput from "../../UI/FormInput/FormInput";
import RegButton from "../../UI/RegButton/RegButton";
import LoginButton from "../../UI/LoginButton/LoginButton";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [activationText, setActivationText] = useState<boolean>(false);
    const [successText, setSuccessText] = useState<boolean>(false);
    const { store } = useContext(Context);

    useEffect(() => {
        if (store.user.isActivated && !activationText) {
            setActivationText(false);
            setSuccessText(true);
        }
    }, [activationText, store.user.isActivated]);

    return (
        <div className="login-form">
            {activationText ? (
                <h2 className="auth-popup">
                    На вашу почту отправлено письмо с ссылкой для активации.
                    Перейдите по ней для завершения регистрации.
                </h2>
            ) : successText ? (
                <h2 className="auth-popup">
                    Аккаунт активирован. Войдите в систему.
                </h2>
            ) : (
                <></>
            )}
            <FormInput
                setFieldValue={setEmail}
                fieldValue={email}
                fieldType="text"
                fieldPlaceholder="Почта"
            />
            <FormInput
                setFieldValue={setPassword}
                fieldValue={password}
                fieldType="password"
                fieldPlaceholder="Пароль"
            />
            <LoginButton
                store={store}
                email={email}
                password={password}
                setSuccessText={setSuccessText}
            />

            <RegButton
                store={store}
                email={email}
                password={password}
                setActivationText={setActivationText}
            />
        </div>
    );
};

export default observer(LoginForm);
