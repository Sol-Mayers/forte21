import Store from "../../../../store/store";
import { ClientsData } from "../ClientsTable/types";

export type DeleteClientModalType = {
    isOpen: boolean;
    onClose: () => void;
    store: Store;
    setDeleteClient: (item: string) => void;
    deleteClient: string;
    setNewClients: (item: ClientsData[]) => void;
    setNotFound: (item: boolean) => void;
};
