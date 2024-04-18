import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { RegisterStudentPayload } from "../Auth/Auth.service";
import { useState, useEffect } from "react";
import axios from "axios";

export const StudentList = () => {
    const [studentList, setStudentList] = useState<RegisterStudentPayload[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/users")
            .then((res) => {
                setStudentList(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.response.data.message);
                setLoading(false);
            });
    }, []);

    return (
        <TableContainer h="100vh" display="flex" justifyContent="center" alignItems="center" bg="#017da7">
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
                {loading ? <p>Loading...</p> : error ? <p>{error}</p> : studentList.map((student) => (
                    <Tbody>
                        <Tr>
                            <Td>student.name</Td>
                            <Td>student.surname</Td>
                            <Td>student.email</Td>
                            <Td>student.cin</Td>
                            <Td>student.phone</Td>
                        </Tr>
                    </Tbody>))};
                <Tfoot>
                    <Tr>
                        <Th>name </Th>
                        <Th>surname</Th>
                        <Th>email</Th>
                        <Th>phone</Th>
                        <Th>cin/passeport</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

