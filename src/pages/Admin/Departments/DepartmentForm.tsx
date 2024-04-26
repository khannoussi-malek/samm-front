import { Stack } from "@chakra-ui/react";
import { FieldInput } from "../../../components/FieldInput";
import { FieldSelect } from "../../../components/FieldSelect";
import { FC } from "react";

type DepartmentFormProps = {
    headOfDepartmentOptions?: { label: string, value: number }[];
};
export const DepartmentForm: FC<DepartmentFormProps> = ({ headOfDepartmentOptions }) => {
    return (<Stack>
        <FieldInput
            name="name"
            label="name"
            placeholder="Enter your name"
            type="name"
            required="name is required"
        />
        <FieldSelect
            name="headOfDepartmentId"
            label="Head of department"
            placeholder="Select a teacher"
            options={headOfDepartmentOptions} />
    </Stack>
    );
};