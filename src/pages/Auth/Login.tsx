import { FieldInput } from "../../components/FieldInput";
import { AbsoluteCenter, Box, Button, Center, Divider, Flex, Grid, GridItem, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { isEmail } from '@formiz/validations';
import { Formiz, useForm } from "@formiz/core";
import { useState } from "react";
import { BiBox } from "react-icons/bi";
export const Login = () => {
    const [showSecretImage, setShowSecretImage] = useState(false);
    const form = useForm({
        onValidSubmit: (values) => {
            setShowSecretImage(values.email === "sami@gmail.com");
            console.log(values);
        },
    });
    return (
        <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
            <Flex h="90vh" width="80%" >
                <Center width="full" bgColor="blue.200" boxShadow="lg">
                    {showSecretImage && <Image src="./sImage/ah-shit-here-we-go-again-ah-shit.gif" borderRadius="lg" />}
                    {!showSecretImage && <Image src="./images/uni.png" alt="university image" />}
                </Center>
                <Center width="full" bg="gray.50" >
                    <Flex flexDirection="column" bg="blue.50" borderRadius="xl" shadow="lg" p="8" h="80%" w="50%" justifyContent="center" >
                        {/* <Box flex="1" display="flex" justifyContent="center">
                            <HStack>
                                <Box w="38px">
                                    <Image src="./images/logo.svg" />
                                </Box>
                                <Box>
                                    <Text as="b" fontSize="3xl" color="#01427A" >SAMM</Text>
                                </Box>
                            </HStack>
                        </Box> */}

                        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(1, 1fr)" h="50px">
                                <GridItem w="38px" h="40px" rowSpan={1} colSpan={1}>
                                    <Image src="./images/logo.svg" />
                                </GridItem>
                                <GridItem rowSpan={1} colSpan={1}>
                                    <Text as="b" fontSize="3xl" color="#01427A" >SAMM</Text>
                                </GridItem>
                                <GridItem rowSpan={1} colSpan={2}>
                                    <Text as="b" fontSize="3xl" color="#01427A" >University</Text>
                                </GridItem>
                            </Grid>
                        </Box>


                        <Box flex="4" display="flex" alignItems="center" justifyContent="center">
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