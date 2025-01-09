import React, { FC } from "react";
import { FormInputType } from "./types";

const FormInput: FC<FormInputType> = ({
    setFieldValue,
    fieldValue,
    fieldType,
    fieldPlaceholder,
}) => {
    return (
        <input
            onChange={(e) => setFieldValue(e.target.value)}
            value={fieldValue}
            type={fieldType}
            placeholder={fieldPlaceholder}
            className="fields_field"
        />
    );
};

export default FormInput;
