import Store from "../../../../store/store";

export type CreateClientModalType = {
    isOpen: boolean;
    onClose: () => void;
    store: Store;
    setDeleteClient: (item: string) => void;
    setNotFound: (item: boolean) => void;
};

export type CreateClientFieldsType = {
    clientId: string;
    contacts: string;
    company: string;
    name: string;
    setClientId: (item: string) => void;
    setContacts: (item: string) => void;
    setCompany: (item: string) => void;
    setName: (item: string) => void;
    setDeleteClient: (item: string) => void;
};
