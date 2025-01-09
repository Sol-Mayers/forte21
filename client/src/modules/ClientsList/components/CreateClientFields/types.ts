export type CreateClientFieldsType = {
    clientId: string;
    dateTime: string;
    company: string;
    name: string;
    contacts: string;
    setClientId: (item: string) => void;
    setDateTime: (item: string) => void;
    setCompany: (item: string) => void;
    setName: (item: string) => void;
    setContacts: (item: string) => void;
};

export type ComplectsType = { name: string; id: number };
