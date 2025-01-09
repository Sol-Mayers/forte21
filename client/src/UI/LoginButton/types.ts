import Store from "../../store/store";

export type LoginButtonType = {
    store: Store;
    email: string;
    password: string;
    setSuccessText: (item: boolean) => void;
};
