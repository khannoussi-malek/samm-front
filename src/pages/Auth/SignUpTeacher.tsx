import { FieldInput } from "../../components/FieldInput";
import { Box, Button, Center, Flex, HStack, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { isEmail, isNumber } from '@formiz/validations';
import { Formiz, useForm } from "@formiz/core";
import { PhoneInput } from "../../components/PhoneInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterStudentPayload, useRegisterTeacher } from "./Auth.service";
export const SignUpTeacher = () => {
    const { mutate: createTeacher } = useRegisterTeacher()

    const form = useForm<RegisterStudentPayload>({
        onValidSubmit: (values) => {
            createTeacher(values);
        },
    });
    const [description, setDescription] = useState('1')
    return (
        <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
            <Flex h="90vh" width="80%" >
                <Center width="full" bgColor="blue.200" boxShadow="lg">
                    <Image src="./images/uni.png" alt="university image" position="relative" />
                    <Text as={Link} to="/Login.tsx" fontWeight="100" fontSize="sm" textDecoration="underline" color="#E14177" position="absolute" top="80px">You have Account ? Login</Text>
                </Center>
                <Center width="full" bg="gray.50" >
                    <Flex flexDirection="column" borderRadius="xl" shadow="lg" p="8" h="full" w="full" justifyContent="center" >
                        <Box flex="1" display="flex" justifyContent="center">
                            <HStack>
                                <Box w="38px">
                                    <Image src="./images/logo.svg" />
                                </Box>
                                <Box>
                                    <Text as="b" fontSize="3xl" color="#01427A" >SAMM UNIVERSITY</Text>
                                </Box>
                            </HStack>
                        </Box>

                        <Box flex="4" display="flex" alignItems="center" justifyContent="center">
                            <Formiz connect={form} autoForm>
                                <Stack>
                                    <HStack>
                                        <FieldInput
                                            name="name"
                                            label="name"
                                            placeholder="Enter your name"
                                            type="name"
                                            required="name is required"
                                        />
                                        <FieldInput
                                            name="surname"
                                            label="surname"
                                            placeholder="Enter your family name"
                                            type="name"
                                            required="surname is required"
                                        />
                                    </HStack>
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
                                    <HStack>
                                        <FieldInput
                                            name="password"
                                            label="Password"
                                            placeholder="must be 8 characters"
                                            type="password"
                                            required="Password is required"
                                        />
                                        <FieldInput
                                            name="VerifPassword"
                                            label="Confirm Password"
                                            placeholder="reset your password"
                                            type="password"
                                            required="Password is required"
                                        />
                                    </HStack>
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
                                        required="surname is required"
                                    />
                                    <RadioGroup onChange={setDescription} value={description}>
                                        <HStack>
                                            <Radio value='1'>Tunisian</Radio>
                                            <Radio value='2'>Stranger</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    {description === '1' &&
                                        <FieldInput
                                            name="CIN"
                                            label="Num Cin"
                                            placeholder="place your cin number"
                                            type="number"
                                            required="cin is required"
                                        />}
                                    {description === '2' &&
                                        <FieldInput
                                            name="Passeport"
                                            label="Num Passeport"
                                            placeholder="place your Passeport number"
                                            type="number"
                                            required="Passeport is required"
                                        />}
                                    <HStack justifyContent="space-evenly">
                                        <Button type="submit" colorScheme="blue" width="40%">
                                            Sign Up
                                        </Button>
                                        <Button type="reset" colorScheme="pink" width="40%">
                                            Cancel
                                        </Button>
                                    </HStack>
                                </Stack>
                            </Formiz>
                        </Box>
                    </Flex>
                </Center>
            </Flex>
        </Box>
    );
}