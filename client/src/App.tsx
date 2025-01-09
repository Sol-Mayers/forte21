import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./pages/Client/Client";
import Kit from "./pages/Kit/Kit";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import DeleteClientModal from "./modules/ClientsList/components/DeleteClientModal/DeleteClientModal";
import { useDisclosure } from "@chakra-ui/react";
import { ClientsData } from "./modules/ClientsList/types";

function App() {
    const { store } = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.checkAuth();
        }
    }, []);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            console.log(response.data);
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const [deleteClient, setDeleteClient] = useState("");

    const {
        isOpen: isDeleteOpen,
        onOpen: onDeleteOpen,
        onClose: onDeleteClose,
    } = useDisclosure();

    let [clients, setNewClients] = useState<ClientsData[]>(store.clients);

    useEffect(() => {
        if (deleteClient !== "") {
            onDeleteOpen();
        }
    }, [deleteClient]);

    const [notFound, setNotFound] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Header store={store} />
            <div className="wrapper">
                {!store.isAuth ? <LoginForm /> : <></>}
                {store.isLoading && <div className="loader"></div>}
                {store.isAuth || store.showActivationText ? (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Main
                                    store={store}
                                    getUsers={getUsers}
                                    users={users}
                                    deleteClient={deleteClient}
                                    setDeleteClient={setDeleteClient}
                                    clients={store.clients}
                                    setNewClients={setNewClients}
                                    setNotFound={setNotFound}
                                />
                            }
                        />
                        <Route
                            path="/:id"
                            element={
                                <Client
                                    store={store}
                                    setDeleteClient={setDeleteClient}
                                    notFound={notFound}
                                />
                            }
                        />
                        <Route path="/issue-id/kit" element={<Kit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                ) : (
                    <></>
                )}
            </div>
            <DeleteClientModal
                isOpen={isDeleteOpen}
                onClose={onDeleteClose}
                store={store}
                setDeleteClient={setDeleteClient}
                deleteClient={deleteClient}
                setNewClients={setNewClients}
                setNotFound={setNotFound}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default observer(App);
