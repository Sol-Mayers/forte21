import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";
import { createContext, FC, useState } from "react";
import { CreateClientFieldsType, CreateClientModalType } from "./types";
import ClientsTable from "../ClientsTable/ClientsTable";
import GetDateTime from "../../helpers/GetDateTime";
import { nanoid } from "nanoid";

export const ClientsContext = createContext<CreateClientFieldsType>(
    {} as CreateClientFieldsType
);

const CreateClientModal: FC<CreateClientModalType> = ({
    isOpen,
    onClose,
    store,
    setDeleteClient,
    setNotFound,
}) => {
    const [clientId, setClientId] = useState<string>("");
    const [contacts, setContacts] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [name, setName] = useState<string>("");

    const getDateTime = new GetDateTime();

    return (
        <ClientsContext.Provider
            value={{
                clientId,
                company,
                contacts,
                name,
                setClientId,
                setCompany,
                setContacts,
                setName,
                setDeleteClient,
            }}
        >
            <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Создание клиента</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ClientsTable
                            editable={true}
                            store={store}
                            setDeleteClient={setDeleteClient}
                            setNotFound={setNotFound}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            onClick={() => {
                                store.setClients({
                                    id: nanoid(),
                                    dateTime: {
                                        currentDateTime:
                                            getDateTime.getCurrentDateTime(),
                                        fullDateTime: String(
                                            getDateTime.getFullDate()
                                        ),
                                    },
                                    name: name,
                                    company: company,
                                    contacts: contacts,
                                });
                                setName("");
                                setCompany("");
                                setContacts("");
                                onClose();
                            }}
                        >
                            Создать
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ClientsContext.Provider>
    );
};

export default CreateClientModal;
