import { Input } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { ClientsContext } from "../CreateClientModal/CeateClientModal";
import "./CreateClientFields.css";

const CreateClientFields: FC = () => {
    const { company, name, contacts, setCompany, setName, setContacts } =
        useContext(ClientsContext);

    return (
        <div className="create-task-fields_wrapper">
            <label>
                <p>Имя клиента</p>
                <Input
                    type="text"
                    bg="white"
                    border="1px"
                    borderColor="gray"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                <p>Компания</p>
                <Input
                    type="text"
                    bg="white"
                    border="1px"
                    borderColor="gray"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </label>
            <label>
                <p>Контактные данные</p>
                <Input
                    type="text"
                    bg="white"
                    border="1px"
                    borderColor="gray"
                    value={contacts}
                    onChange={(e) => setContacts(e.target.value)}
                />
            </label>
        </div>
    );
};

export default CreateClientFields;
