import { Button, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useListUsers } from "./user.service";
import { Page, PageContent } from "../../../components/Page";
import { useState } from "react";
import { User } from "../../Auth/service";
import { AdminUserUpdateModal } from "./AdminUserUpdateModal";
import { AdminUserDeleteModal } from "./AdminUserDeleteModal";

const AdminUsers = () => {
    const [role, setRole] = useState("");
    const { users, isLoading, isSuccess, isError, refetch } = useListUsers(role);
    console.log({ users })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [oneUserInformation, setOneUserInformation] = useState({} as User)

    return (
        <Page containerSize="xl" >
            <PageContent  >
                <Heading>Users</Heading>
                <Select onChange={(e) => { setRole(e.target.value) }} maxW="15rem" placeholder='Select option'>
                    <option value='Student'>Students</option>
                    <option value='teacher'>Teachers</option>
                    <option value='Admin'>Admins</option>
                </Select>
                {isLoading &&
                    <Center w="full">
                        <Spinner />
                    </Center>}
                {isSuccess && <TableContainer   >
                    <Table w="full" variant='simple' color="#04326b" bg={"#fff"} borderRadius={8}>
                        <TableCaption>users' List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>name </Th>
                                <Th>email</Th>
                                <Th>phone</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        {!!isError && <Button onClick={() => { refetch() }}>Refresh</Button>}
                        <Tbody>
                            {users.map((student) => (
                                <Tr onClick={() => {
                                    setOneUserInformation(student)
                                    onOpen();
                                }}>
                                    <Td>{student.nom || ""} {student.prenom || ""}</Td>
                                    <Td>{student.email}</Td>
                                    <Td>{student.phone}</Td>
                                    <Td > <AdminUserUpdateModal aria-label="UpdateIcon" user={student} /> <AdminUserDeleteModal user={student} /> </Td>


                                </Tr>
                            ))}
                        </Tbody>

                    </Table>
                </TableContainer>}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{oneUserInformation.nom} {oneUserInformation.prenom} Information</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Email: {oneUserInformation.email}</Text>
                            <Text>Phone: {oneUserInformation.phone}</Text>
                            <Text>Cin: {oneUserInformation.CIN}</Text>
                            <Text>Passeport: {oneUserInformation.passport}</Text>
                            <Text>Role: {oneUserInformation.role}</Text>
                        </ModalBody>

                    </ModalContent>
                </Modal>
            </PageContent>
        </Page>
    );
}

export default AdminUsers;