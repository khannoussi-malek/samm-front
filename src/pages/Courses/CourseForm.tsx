import { HStack, Stack } from "@chakra-ui/react";
import { FieldInput } from "../../components/FieldInput";
import { FieldSelect } from "../../components/FieldSelect";

export const groupsOptions = [
    // give me fakedata for groups
    { value: "ING-GL-G1", label: "ING-GL-G1" },
    { value: "ING-GL-G2", label: "ING-GL-G2" },
    { value: "ING-GL-G3", label: "ING-GL-G3" },
    { value: "ING-GL-G4", label: "ING-GL-G4" },
    { value: "ING-GL-G5", label: "ING-GL-G5" },
    { value: "ING-GL-G6", label: "ING-GL-G6" },
    { value: "ING-GL-G7", label: "ING-GL-G7" },
    { value: "ING-GL-G8", label: "ING-GL-G8" },
    { value: "ING-GL-G9", label: "ING-GL-G9" },
    { value: "ING-GL-G10", label: "ING-GL-G10" },
    { value: "ING-GL-G11", label: "ING-GL-G11" },
    { value: "ING-GL-G12", label: "ING-GL-G12" },
    { value: "ING-GL-G13", label: "ING-GL-G13" },
    { value: "ING-GL-G14", label: "ING-GL-G14" },
    { value: "ING-GL-G15", label: "ING-GL-G15" },
    { value: "ING-GL-G16", label: "ING-GL-G16" },
    { value: "ING-GL-G17", label: "ING-GL-G17" },
    { value: "ING-GL-G18", label: "ING-GL-G18" },
    { value: "ING-GL-G19", label: "ING-GL-G19" },
    { value: "ING-GL-G20", label: "ING-GL-G20" },
    { value: "ING-GL-G21", label: "ING-GL-G21" },
    { value: "ING-GL-G22", label: "ING-GL-G22" },
    { value: "ING-GL-G23", label: "ING-GL-G23" },
    { value: "ING-GL-G24", label: "ING-GL-G24" },
    { value: "ING-GL-G25", label: "ING-GL-G25" },
    { value: "ING-GL-G26", label: "ING-GL-G26" },
]
export const CourseForm = () => {
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

        </HStack>
        <HStack>

            <FieldSelect name="class" label="group" options={groupsOptions}
                placeholder="Select a group"
                required="group is required"
                isMulti
            />
        </HStack>
    </Stack>
    );
};