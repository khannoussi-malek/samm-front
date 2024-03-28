import { FieldInput } from "../../components/FieldInput";
import { AbsoluteCenter, Box, Button, Center, Divider, Flex, Grid, GridItem, HStack, Image, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";
import { isEmail } from '@formiz/validations';
import { Formiz, useForm } from "@formiz/core";
import { PhoneInput } from "../../components/PhoneInput";
export const SignUp = () => {
    const form = useForm({
        onValidSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
            <Flex h="90vh" width="80%" >
                <Center width="full" bgColor="blue.200" boxShadow="lg">
                    <Image src="./images/uni.png" alt="university image" />
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
                                    <FieldInput
                                        name="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        type="email"
                                        required="Email is required"
                                        helper="hatta sami aandou compte"
                                        validations={[
                                            {
                                                handler: isEmail(),
                                                message: "lazem email ya hamel",
                                            },
                                        ]}
                                    />
                                    <FieldInput
                                        name="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        required="Password is required"
                                    />
                                    <PhoneInput
                                        name="phone"
                                        label="phone number"
                                        placeholder="Enter your phone number"
                                        type="name"
                                        required="surname is required"
                                    />
                                    <Button type="submit" colorScheme="blue">
                                        Login
                                    </Button>
                                </Stack>
                            </Formiz>
                        </Box>
                        <Box flex="1" position='relative' padding='0px'>
                            <Divider colorScheme="blackAlpha" size="20px" variant="solid" />
                            <AbsoluteCenter bg='blue.50' px='4'>
                                Or
                            </AbsoluteCenter>
                        </Box>
                        <Button colorScheme="pink" onClick={() => { window.location.href = "/signup" }}>
                            Sign in with google
                        </Button>
                    </Flex>
                </Center>
            </Flex>
        </Box>
    );
}