import { FieldInput } from "../../components/FieldInput";
import { Box, Button, Center, Flex, HStack, Image, Radio, RadioGroup, Stack, Text, useToast } from "@chakra-ui/react";
import { isEmail, isNumber } from '@formiz/validations';
import { Formiz, useForm } from "@formiz/core";
import { PhoneInput } from "../../components/PhoneInput";
import { useState } from "react";
import { useRegisterStudent, RegisterStudentPayload } from "./Auth.service";
import { useNavigate } from "react-router-dom";
export const SignUpStudent = () => {

    const toastSuccess = useToast();

    const navigate = useNavigate();
    const { mutate: createStudent } = useRegisterStudent({
        onSuccess: () => {
            toastSuccess({
                title: "User created successfully",
                status: 'success',
            });
            navigate('/login')
        },
        onError:(error)=>{
            toastSuccess({
                title: error.response.data.message[0] || "error",
                status: 'error',
            });
        }
    })
    const form = useForm<RegisterStudentPayload>({
        onValidSubmit: (values) => {
            createStudent(values);
        },
    });
    
    const [description, setDescription] = useState('1')
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
                                        required="surname is required"    
                                        validations={[
                                            {
                                                handler: isNumber(),
                                                message: "phone number contain numbers only"
                                            }
                                        ]}
                                    />
                                    <FieldInput
                                        name="Inscri"
                                        label="Num Inscription"
                                        placeholder="place your inscription number"
                                        type="number"
                                        required="inscription number is required"
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
                                            name="passeport"
                                            label="Num Passeport"
                                            placeholder="place your Passeport number"
                                            type="number"
                                            required="Passeport is required"
                                            
                                        />}
                                    <HStack justifyContent="space-evenly">
                                        <Button type="submit" colorScheme="blue" width="40%">
                                            Sign Up
                                        </Button>
                                        <Button type="reset" onClick={()=>navigate(-1)} colorScheme="pink" width="40%">
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