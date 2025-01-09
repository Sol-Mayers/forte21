import Store from "../../store/store";

export type ClientPageType = {
    store: Store;
    itemNumber?: string;
    setDeleteClient: (item: string) => void;
    notFound: boolean;
};
