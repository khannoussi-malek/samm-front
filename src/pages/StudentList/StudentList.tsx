import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useStudentList } from "./students.service";

export const StudentList = () => {
    const { students, isLoading, isError, refetch } = useStudentList();



    return (
        <TableContainer h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7" flexDirection="column" >
            <Button>add student</Button>
            <Table variant='simple' color="#04326b" width="80%" bg={"#fff"} borderRadius={8}>
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
                {!!isLoading && <p>Loading...</p>}
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
                    ))};
                </Tbody>

            </Table>
        </TableContainer>
    );
};

