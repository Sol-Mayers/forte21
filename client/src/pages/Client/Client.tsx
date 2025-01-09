import React, { ChangeEvent, FC, useState } from "react";
import { ClientPageType } from "./types";
import { IconButton, Input } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "./Client.module.css";
import NotFound from "../NotFound/NotFound";
import cn from "classnames";
import useClickOutside from "./hooks/useClickOutside";

const Client: FC<ClientPageType> = ({
    store,
    itemNumber,
    setDeleteClient,
    notFound,
}) => {
    let currentItem = store.clients[store.itemIndex] || "";

    // Редактируем имя
    const [name, setName] = useState<string>(currentItem.name);
    const [customizeName, setCustomizeName] = useState(false);
    const nameRef = useClickOutside(() => setCustomizeName(false));

    // Редактируем компанию
    const [company, setCompany] = useState<string>(currentItem.company);
    const [customizeCompany, setCustomizeCompany] = useState(false);
    const companyRef = useClickOutside(() => setCustomizeCompany(false));

    // Редактируем контакты
    const [contacts, setContacts] = useState<string>(currentItem.contacts);
    const [customizeContacts, setCustomizeContacts] = useState(false);
    const contactsRef = useClickOutside(() => setCustomizeContacts(false));

    return (
        <>
            {currentItem && !notFound ? (
                <div className={styles.clientsWrapper}>
                    <div className={styles.clientsTable}>
                        <div className={styles.clientsTableInnerWrapper}>
                            <div className={styles.clientsTable_header}>
                                <div
                                    className={styles.header_headerTitle}
                                ></div>
                                <div className={styles.header_headerTitle}>
                                    id
                                </div>
                                <div className={styles.header_headerTitle}>
                                    дата/время
                                </div>
                                <div className={styles.header_headerTitle}>
                                    имя
                                </div>
                                <div className={styles.header_headerTitle}>
                                    компания
                                </div>
                                <div className={styles.header_headerTitle}>
                                    контактные данные
                                </div>
                            </div>
                            <div className={styles.clientTable_wrapper}>
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
                                        onClick={() => {
                                            setDeleteClient(currentItem.id);
                                        }}
                                    />
                                </div>
                                <div
                                    className={cn(
                                        styles.link_taskTable,
                                        styles.link_id
                                    )}
                                >
                                    {currentItem.id}
                                </div>
                                <div className={styles.link_taskTable}>
                                    {currentItem.dateTime.currentDateTime}
                                </div>
                                <div
                                    ref={nameRef}
                                    className={cn(
                                        styles.link_taskTableCustomizing,
                                        styles.link_taskTable
                                    )}
                                >
                                    {customizeName ? (
                                        <Input
                                            bg="white"
                                            border="1px"
                                            borderColor="gray"
                                            value={name}
                                            onInput={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setName(e.target.value);
                                            }}
                                            onBlur={(e) => {
                                                store.customizeName(
                                                    currentItem.id,
                                                    e.target.value
                                                );
                                                setCustomizeName(false);
                                            }}
                                            onKeyDown={(
                                                e: React.KeyboardEvent<HTMLInputElement>
                                            ) => {
                                                if (e.key === "Enter") {
                                                    store.customizeName(
                                                        currentItem.id,
                                                        (
                                                            e.target as HTMLInputElement
                                                        ).value
                                                    );
                                                    setCustomizeName(false);
                                                }
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className={
                                                styles.clientTable_editWrapper
                                            }
                                        >
                                            {currentItem.name}
                                            <button
                                                className={
                                                    styles.editWrapper_button
                                                }
                                                onClick={() =>
                                                    setCustomizeName(true)
                                                }
                                            ></button>
                                        </div>
                                    )}
                                </div>
                                <div
                                    ref={companyRef}
                                    className={cn(
                                        styles.link_taskTableCustomizing,
                                        styles.link_taskTable
                                    )}
                                >
                                    {customizeCompany ? (
                                        <Input
                                            bg="white"
                                            border="1px"
                                            borderColor="gray"
                                            value={company}
                                            onInput={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setCompany(e.target.value);
                                            }}
                                            onBlur={(e) => {
                                                store.customizeCompany(
                                                    currentItem.id,
                                                    e.target.value
                                                );
                                                setCustomizeCompany(false);
                                            }}
                                            onKeyDown={(
                                                e: React.KeyboardEvent<HTMLInputElement>
                                            ) => {
                                                if (e.key === "Enter") {
                                                    store.customizeCompany(
                                                        currentItem.id,
                                                        (
                                                            e.target as HTMLInputElement
                                                        ).value
                                                    );
                                                    setCustomizeCompany(false);
                                                }
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className={
                                                styles.clientTable_editWrapper
                                            }
                                        >
                                            {currentItem.company}
                                            <button
                                                className={
                                                    styles.editWrapper_button
                                                }
                                                onClick={() =>
                                                    setCustomizeCompany(true)
                                                }
                                            ></button>
                                        </div>
                                    )}
                                </div>
                                <div
                                    ref={contactsRef}
                                    className={cn(
                                        styles.link_taskTableCustomizing,
                                        styles.link_taskTable
                                    )}
                                >
                                    {customizeContacts ? (
                                        <Input
                                            bg="white"
                                            border="1px"
                                            borderColor="gray"
                                            value={contacts}
                                            onInput={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setContacts(e.target.value);
                                            }}
                                            onBlur={(e) => {
                                                store.customizeContacts(
                                                    currentItem.id,
                                                    e.target.value
                                                );
                                                setCustomizeContacts(false);
                                            }}
                                            onKeyDown={(
                                                e: React.KeyboardEvent<HTMLInputElement>
                                            ) => {
                                                if (e.key === "Enter") {
                                                    store.customizeContacts(
                                                        currentItem.id,
                                                        (
                                                            e.target as HTMLInputElement
                                                        ).value
                                                    );
                                                    setCustomizeContacts(false);
                                                }
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className={
                                                styles.clientTable_editWrapper
                                            }
                                        >
                                            {currentItem.contacts}
                                            <button
                                                className={
                                                    styles.editWrapper_button
                                                }
                                                onClick={() =>
                                                    setCustomizeContacts(true)
                                                }
                                            ></button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default Client;
