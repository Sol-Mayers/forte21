import Store from "../../../../store/store";

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

export type ClientsTableType = {
    clientsList?: ClientsData[];
    editable: boolean;
    store: Store;
    setDeleteClient: (deleteClient: string) => void;
    setNotFound: (deleteClient: boolean) => void;
};
