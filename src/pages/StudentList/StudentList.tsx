import { Box, Button, Center, Flex, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useStudentList } from "./students.service";

export const StudentList = () => {
    const { students, isLoading, isError, refetch } = useStudentList();



    return (
        <Box bg="#017da7" minH="100vh" p="4">
            <Center flexDirection="column" >
                <Flex justifyContent="flex-end" w="80vw" mb="2">
                    <Button>add student</Button></Flex>
                {!!isLoading &&
                    <Center w="full">
                        <Spinner />
                    </Center>}
                {!isLoading && <TableContainer   >
                    <Table minW="80vw" variant='simple' color="#04326b" width="80%" bg={"#fff"} borderRadius={8}>
                        <TableCaption>Students' List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>name </Th>
                                <Th>surname</Th>
                                <Th>email</Th>
                                <Th>phone</Th>
                                <Th>cin/passeport</Th>
                            </Tr>
                        </Thead>

                        {isError && <p>there is a error <Button onClick={() => refetch()}>Refresh</Button></p>}
                        <Tbody>
                            {students.map((student) => (
                                <Tr>
                                    <Td>{student.nom}</Td>
                                    <Td>{student.prenom}</Td>
                                    <Td>{student.email}</Td>
                                    <Td>{student.CIN}</Td>
                                    <Td>{student.phone}</Td>
                                </Tr>
                            ))}
                        </Tbody>

                    </Table>
                </TableContainer>}
            </Center>
        </Box>
    );
};

