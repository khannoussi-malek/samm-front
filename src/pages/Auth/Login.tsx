import { FieldInput } from "../../components/FieldInput";
import { Box, Button, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { isEmail } from '@formiz/validations';
import { Formiz, useForm } from "@formiz/core";
import { useState } from "react";
export const Login = () => {
    const [showSecretImage, setShowSecretImage] = useState(false);
    const form = useForm({
        onValidSubmit: (values) => {
            setShowSecretImage(values.email === "sami@gmail.com")
            console.log(values);
        },
    });
    return (
        <Flex>
            <Center width="full" bgColor="blue.200" boxShadow="lg">
                {showSecretImage && <Image src="./sImage/ah-shit-here-we-go-again-ah-shit.gif" borderRadius="lg" />}
            </Center>
            <Center h="100vh" width="full" bg="gray.50">
                <Box bg="blue.50" borderRadius="xl" shadow="lg" p="8">
                    <Formiz connect={form} autoForm>
                        <Stack>
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
                            <Button type="submit" colorScheme="blue">
                                Login
                            </Button>
                        </Stack>
                    </Formiz>
                </Box>
            </Center>
        </Flex>
    );
}