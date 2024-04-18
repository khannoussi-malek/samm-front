import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTeacherList } from "./teachers.service";

export const TeacherList = () => {
    const { teachers, isLoading, isError, refetch } = useTeacherList();



    return (
        <TableContainer h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
            <Table variant='simple' color="#04326b" width="80%" bg={"#fff"} borderRadius={8}>
                <TableCaption>teachers' List</TableCaption>
                <Thead>
                    <Tr>
                        <Th>name </Th>
                        <Th>surname</Th>
                        <Th>email</Th>
                        <Th>phone</Th>
                        <Th>cin/passeport</Th>
                    </Tr>
                </Thead>
                {!!isLoading && <p>Loading...</p>}
                {isError && <p>there is a error <Button onClick={() => refetch()}>Refresh</Button></p>}
                <Tbody>
                    {teachers.map((teacher) => (
                        <Tr>
                            <Td>{teacher.nom}</Td>
                            <Td>{teacher.prenom}</Td>
                            <Td>{teacher.email}</Td>
                            <Td>{teacher.CIN}</Td>
                            <Td>{teacher.phone}</Td>
                        </Tr>
                    ))};
                </Tbody>

            </Table>
        </TableContainer>
    );
};

