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
import { FC } from "react";
import { DeleteClientModalType } from "./types";
import { Link } from "react-router-dom";
import styles from "./DeleteClientModal.module.css";

const DeleteClientModal: FC<DeleteClientModalType> = ({
    isOpen,
    onClose,
    store,
    setDeleteClient,
    deleteClient,
    setNewClients,
    setNotFound,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Удалить клиента</ModalHeader>
                <ModalCloseButton onClick={() => setDeleteClient("")} />
                <ModalBody>
                    Вы действительно хотите удалить этого клиента?
                </ModalBody>

                <ModalFooter>
                    <Link
                        to="/"
                        className={styles.confirmDeleteLink}
                        onClick={() => {
                            store.deleteClient(deleteClient);
                            setNewClients(store.clients);
                            setDeleteClient("");
                            onClose();
                            setNotFound(true);
                        }}
                    >
                        Удалить
                    </Link>
                    <Button
                        colorScheme="teal"
                        onClick={() => {
                            setDeleteClient("");
                            onClose();
                        }}
                    >
                        Отмена
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteClientModal;
