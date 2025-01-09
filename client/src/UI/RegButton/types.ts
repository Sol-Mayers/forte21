import Store from "../../store/store";

export type RegButtonType = {
    store: Store;
    email: string;
    password: string;
    setActivationText: (item: boolean) => void;
};
