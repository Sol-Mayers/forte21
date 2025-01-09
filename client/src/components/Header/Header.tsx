import React, { FC } from "react";
import "./Header.css";
import { HeaderType } from "./types";
import { Link } from "react-router-dom";

const Header: FC<HeaderType> = ({ store }) => {
    return (
        <div className="header">
            Список клиентов
            <Link to="/">Главная</Link>
            {store.isAuth && (
                <button onClick={() => store.logout()}>Выйти</button>
            )}
        </div>
    );
};

export default Header;
