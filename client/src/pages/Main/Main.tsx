import React, { FC, useState } from "react";
import { MainPageType } from "./types";
import "./Main.css";
import ClientsList from "../../modules/ClientsList/ClientsList";

const Main: FC<MainPageType> = ({
    store,
    getUsers,
    users,
    setDeleteClient,
    deleteClient,
    clients,
    setNewClients,
    setNotFound,
}) => {
    const userInfo = JSON.parse(localStorage.getItem("auth")!);

    return (
        <div className="main">
            {!store.isLoading && userInfo ? (
                userInfo.role! === "employee" ? (
                    <>
                        <div>"Ваша роль - сотрудник"</div>
                        <button onClick={() => store.logout()}>Выйти</button>
                    </>
                ) : userInfo.role! === "admin" ? (
                    <ClientsList
                        store={store}
                        deleteClient={deleteClient}
                        setDeleteClient={setDeleteClient}
                        setNewClients={setNewClients}
                        clients={clients}
                        setNotFound={setNotFound}
                    />
                ) : (
                    <></>
                )
            ) : (
                <></>
            )}
            {users.map((user) => (
                <div key={user.email}>{user.email}</div>
            ))}
        </div>
    );
};

export default Main;
