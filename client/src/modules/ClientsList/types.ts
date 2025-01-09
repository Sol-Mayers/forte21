import Store from "../../store/store";

export type ClientsData = {
    id: string;
    dateTime: {
        currentDateTime: string;
        fullDateTime: string;
    };
    name: string;
    company: string;
    contacts: string;
};

export type ClientsListType = {
    store: Store;
    deleteClient: string;
    setDeleteClient: (item: string) => void;
    clients: ClientsData[];
    setNewClients: (item: ClientsData[]) => void;
    setNotFound: (item: boolean) => void;
};
