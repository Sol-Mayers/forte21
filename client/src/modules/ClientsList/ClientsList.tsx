import { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Input, useDisclosure, Select } from "@chakra-ui/react";
import "./ClientsList.css";
import CreateClientModal from "./components/CreateClientModal/CeateClientModal";
import ClientsTable from "./components/ClientsTable/ClientsTable";
import { ClientsListType } from "./types";

const ClientsList: FC<ClientsListType> = ({
    store,
    deleteClient,
    setDeleteClient,
    clients,
    setNewClients,
    setNotFound,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [sortBy, setSortBy] = useState("");
    const [searchValue, setSearchValue] = useState("");

    let handleChange = function (e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    };
    let searchString = searchValue.trim().toLowerCase();

    if (searchString.length > 0) {
        clients = clients.filter(function (l) {
            return l.name.toLowerCase().match(searchString);
        });
    }

    useEffect(() => {
        let newClients = [...store.clients];

        if (sortBy === "fromNew") {
            setNewClients([...store.getSortedByNewClients(newClients)]);
        }
        if (sortBy === "fromOld") {
            setNewClients([...store.getSortedByOldClients(newClients)]);
        }
    }, [sortBy]);

    return (
        <div className="issuesWrapper">
            <div className="issuesNav">
                <Button colorScheme="teal" onClick={onOpen}>
                    Создать Клиента
                </Button>
                <Select
                    w="auto"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    placeholder="Сортировать"
                >
                    <option value="fromNew">Сначала новые</option>
                    <option value="fromOld">Сначала старые</option>
                </Select>
                <Input
                    type="search"
                    placeholder="Поиск"
                    w="auto"
                    onChange={handleChange}
                    value={searchValue}
                />
            </div>
            <h2 className="issuesTitle">Все клиенты:</h2>
            <ClientsTable
                editable={false}
                store={store}
                clientsList={clients}
                setDeleteClient={setDeleteClient}
                setNotFound={setNotFound}
            />
            <CreateClientModal
                isOpen={isOpen}
                onClose={onClose}
                store={store}
                setDeleteClient={setDeleteClient}
                setNotFound={setNotFound}
            />
        </div>
    );
};

export default ClientsList;
