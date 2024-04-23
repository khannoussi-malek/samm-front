import { HStack, Select, Stack } from "@chakra-ui/react";
import { isEmail, isNumber } from "@formiz/validations";
import { FieldInput } from "../../../components/FieldInput";
import { PhoneInput } from "../../../components/PhoneInput";
import { useState } from "react";
import { FieldSelect } from "../../../components/FieldSelect";

export const UserForm = () => {
    return (<Stack>
        <HStack>
            <FieldInput
                name="nom"
                label="name"
                placeholder="Enter your name"
                type="name"
                required="name is required"
            />
            <FieldInput
                name="prenom"
                label="surname"
                placeholder="Enter your family name"
                type="name"
                required="surname is required"
            />
        </HStack>
        <HStack>
            <FieldInput
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                required="Email is required"
                validations={[
                    {
                        handler: isEmail(),
                        message: "lazem email ya hamel",
                    },
                ]}
            />



            <PhoneInput
                name="phone"
                label="phone number"
                placeholder="Enter your phone number"
                type="name"
                validations={[
                    {
                        handler: isNumber(),
                        message: "phone number contain numbers only"
                    }
                ]}
            />
        </HStack>
        <HStack>
        <FieldInput
            name="Inscri"
            label="Num Inscription"
            placeholder="place your inscription number"
            type="number"
        />
        <FieldInput
            name="Password"
            label="New Password"
            placeholder="place your Password"
            type="password"
        />
        </HStack>


        <FieldSelect name="role" label="Role" options={[
                { value: 'Student', label: 'Student' },
                { value: 'teacher', label: 'Teacher' },
                { value: 'Admin', label: 'Admin' },
            ]}
            placeholder="Select a role"
            required="Role is required"
        />
        <HStack>
        <FieldInput
            name="CIN"
            label="Num Cin"
            placeholder="place your cin number"
            type="number"
        />
        <FieldInput
            name="passeport"
            label="Num Passeport"
            placeholder="place your Passeport number"
            type="number"

        />
        </HStack>
    </Stack>
    );
};