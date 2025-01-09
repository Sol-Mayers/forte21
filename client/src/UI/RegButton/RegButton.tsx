import React, { FC } from "react";
import { RegButtonType } from "./types";

const RegButton: FC<RegButtonType> = ({
    store,
    setActivationText,
    email,
    password,
}) => {
    return (
        <button
            onClick={() => {
                if (email !== "" && password !== "") {
                    store.registration(email, password);
                    setActivationText(true);
                }
            }}
        >
            Регистрация
        </button>
    );
};

export default RegButton;
