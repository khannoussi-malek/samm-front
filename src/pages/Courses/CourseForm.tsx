import { HStack, Stack } from "@chakra-ui/react";
import { FieldInput } from "../../components/FieldInput";
import { FieldSelect } from "../../components/FieldSelect";
import { FC } from "react";

export const majorsOptions = [
    // give me fakedata for groups
    { value: "ING-GL", label: "ING-GL" },
    { value: "ING-Industry", label: "ING-Industry" },
    { value: "LSI", label: "LSI" },
    { value: "SI", label: "SI" },
]

type CourseFormProps = {
    teacherOptions?: { label: string, value: number }[];

};
export const CourseForm: FC<CourseFormProps> = ({ teacherOptions }) => {
    return (<Stack>
        <HStack>
            <FieldInput
                name="name"
                label="name"
                placeholder="Enter subject name"
                type="name"
                required="name is required"
            />
            <FieldInput
                name="coef"
                label="coef"
                placeholder="Enter subject's coef"
                type="number"
                required="coef is required"
            />
        </HStack>
        <HStack>
            <FieldSelect name="type" label="type" options={[
                { value: 'cours', label: 'cours' },
                { value: 'TD', label: 'td' },
                { value: 'TP', label: 'tp' },
            ]}
                placeholder="Select a type"
                required="type is required"
            />
            <FieldSelect name="teacher" label="teacher" options={teacherOptions}
                placeholder="Select a teacher"
                required="teacher is required"
            />
        </HStack>
        <HStack>

            <FieldSelect name="class" label="major" options={majorsOptions}
                placeholder="Select a major"
                required="major is required"
                isMulti
            />
        </HStack>
    </Stack>
    );
};