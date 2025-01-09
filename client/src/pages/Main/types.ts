import { IUser } from "../../models/IUser";
import { ClientsData } from "../../modules/ClientsList/types";
import Store from "../../store/store";

export type MainPageType = {
    store: Store;
    getUsers: () => Promise<void>;
    users: IUser[];
    deleteClient: string;
    setDeleteClient: (item: string) => void;
    clients: ClientsData[];
    setNewClients: (item: ClientsData[]) => void;
    setNotFound: (item: boolean) => void;
};
