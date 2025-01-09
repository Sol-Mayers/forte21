import { IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { ClientsData, ClientsTableType } from "./types";
import CreateClientFields from "../CreateClientFields/CreateClientFields";
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "./ClientsTable.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";

const ClientsTable: FC<ClientsTableType> = ({
    editable,
    store,
    clientsList,
    setDeleteClient,
    setNotFound,
}) => {
    return (
        <>
            {editable ? (
                <CreateClientFields />
            ) : (
                <div className={styles.clientsTable}>
                    <div className={styles.clientsTableInnerWrapper}>
                        <div className={styles.clientsTable_header}>
                            <div className={styles.header_headerTitle}></div>
                            <div className={styles.header_headerTitle}>id</div>
                            <div className={styles.header_headerTitle}>
                                дата/время
                            </div>
                            <div className={styles.header_headerTitle}>имя</div>
                            <div className={styles.header_headerTitle}>
                                компания
                            </div>
                            <div className={styles.header_headerTitle}>
                                контактные данные
                            </div>
                        </div>
                        {clientsList?.map((item: ClientsData, index) => (
                            <Link
                                key={item.id}
                                className={styles.clientTable_link}
                                onClick={() => {
                                    store.setItemIndex(index);
                                    setNotFound(false);
                                }}
                                to={item.id}
                            >
                                <div className={styles.link_taskTable}>
                                    <IconButton
                                        colorScheme="orange"
                                        aria-label="Search database"
                                        minWidth="20px"
                                        minHeight="20px"
                                        maxWidth="30px"
                                        maxHeight="30px"
                                        width="100%"
                                        height="100%"
                                        icon={<DeleteIcon />}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setDeleteClient(item.id);
                                        }}
                                    />
                                </div>
                                <div
                                    className={cn(
                                        styles.link_taskTable,
                                        styles.link_id
                                    )}
                                >
                                    {item.id}
                                </div>
                                <div className={styles.link_taskTable}>
                                    {item.dateTime.currentDateTime}
                                </div>
                                <div className={styles.link_taskTable}>
                                    {item.name}
                                </div>
                                <div className={styles.link_taskTable}>
                                    {item.company}
                                </div>
                                <div className={styles.link_taskTable}>
                                    {item.contacts}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ClientsTable;
