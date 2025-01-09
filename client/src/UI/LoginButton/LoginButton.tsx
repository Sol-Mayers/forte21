import React, { FC } from "react";
import { LoginButtonType } from "./types";

const LoginButton: FC<LoginButtonType> = ({
    store,
    setSuccessText,
    email,
    password,
}) => {
    return (
        <button
            onClick={() => {
                if (
                    localStorage.getItem("activated") === "true" &&
                    email &&
                    password
                ) {
                    store.login(email, password);
                    setSuccessText(false);
                } else
                    alert(
                        "Вы не зарегистрированы или ещё не подтвердили аккаунт!"
                    );
            }}
        >
            Войти
        </button>
    );
};

export default LoginButton;
