import { Box, Button, Center, Divider, Flex, Grid, GridItem, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { isEmail } from '@formiz/validations';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldInput } from "../../components/FieldInput";
import { useLogin } from "./Auth.service";
const Login = () => {

    const {mutate:login} = useLogin();
    const [showSecretImage, setShowSecretImage] = useState(false);
    const form = useForm({
        onValidSubmit: (values) => {
            setShowSecretImage(values.email === "sami@gmail.com");
            login(values)
        },
    });
    let navigate = useNavigate();
const isMobile = useBreakpointValue({base:true,md:false})
    return (
        <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
            <Flex h="90vh" width="80%" >
                {!isMobile && <Center width="full" bgColor="blue.200" boxShadow="lg">
                    {showSecretImage && <Image src="./sImage/ah-shit-here-we-go-again-ah-shit.gif" borderRadius="lg" />}
                    {!showSecretImage && <Image src="./images/uni.png" alt="university image" />}
                </Center>}
                <Center width="full" bg="gray.50" >
                    <Stack flexDirection="column" bg="blue.50" borderRadius="xl" shadow="lg" p="8" h="80%" w={{base:"full",lg:"70%",xl:"50%"}} justifyContent="space-around" >
                        <Stack>
                            <Stack justifyContent="center" alignItems="center">
                                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(1, 1fr)">
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
                            </Stack>
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
                                    <Text as={Link} to="/" textAlign="right" fontWeight="100" color="#01B3EF" fontSize="sm" textDecoration="underline">
                                        Forgot password ?
                                    </Text>
                                    <Button type="submit" colorScheme="blue">
                                        Login
                                    </Button>
                                </Stack>
                            </Formiz>
                        </Stack>
                        <HStack>
                            <Divider />
                            <Text>Or</Text>
                            <Divider />
                        </HStack>
                        {/* <Box position='relative' padding="8" bg="black">
                            <Divider colorScheme="blackAlpha" size="20px" variant="solid" />
                            <AbsoluteCenter bg='blue.50' px='4'>
                                Or
                            </AbsoluteCenter>
                        </Box> */}
                        <Button colorScheme="pink" onClick={() => { navigate('/signupStudent') }}>
                            Sign Up
                        </Button>
                    </Stack>
                </Center>
            </Flex>
        </Box>
    );
}
export default Login;