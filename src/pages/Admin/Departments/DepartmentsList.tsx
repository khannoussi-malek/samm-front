import { Badge, Button, Center, Heading, Spinner, Stack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import { Page, PageContent } from "../../../components/Page";
import { DepartmentDeleteModal } from "./DepartmentDeleteModal";
import { DepartmentUpdateModal } from "./DepartmentUpdateModal";
import { useListDepartments } from "./department.service";
import { Icon } from "../../../components/Icon";
import dayjs from "dayjs";

const departmentsList = () => {
    const { departments, isLoading, isSuccess, isError, refetch } = useListDepartments();
    console.log({ departments })
    const { onOpen } = useDisclosure()

    return (
        <Page containerSize="xl" >
            <PageContent  >
                <Heading>departments</Heading>
                <Stack direction="row" justifyContent="flex-end">
                    <DepartmentUpdateModal isForCreate />
                </Stack>
                {isLoading &&
                    <Center w="full">
                        <Spinner />
                    </Center>}
                {isSuccess && <TableContainer>
                    <Table w="full" variant='simple' color="#04326b" bg={"#fff"} borderRadius={8}>
                        <TableCaption>departments' List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Creation Date</Th>
                                <Th>Majors' number</Th>
                                <Th>Head of department</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        {!!isError && <Button onClick={() => { refetch() }}>Refresh</Button>}
                        <Tbody>
                            {departments.map((department) => (
                                <Tr onClick={() => {
                                    onOpen();
                                }}
                                    _hover={{
                                        bg: "blue.50"
                                    }}>
                                    <Td >
                                        <Tooltip label={`the boss`} borderRadius="lg" hasArrow>
                                            <Badge
                                                colorScheme={
                                                    !department.headOfDepartmentId ? 'blue' : 'warning'
                                                }
                                            >
                                                <Icon
                                                    fontSize="lg"
                                                    icon={
                                                        !department.headOfDepartmentId
                                                            ? FiUserPlus
                                                            : FiUserMinus
                                                    }
                                                    color="warning"
                                                />
                                            </Badge>
                                        </Tooltip>
                                    </Td>
                                    <Td>{department.id}</Td>
                                    <Td>{department.name}</Td>
                                    <Td>{dayjs(department.createdAt).format("YYYY-M-DD")}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td display="flex" justifyContent="flex-end" gap="2" > <DepartmentUpdateModal aria-label="UpdateIcon" department={department} /> <DepartmentDeleteModal department={department} /> </Td>
                                </Tr>
                            ))}
                        </Tbody>

                    </Table>
                </TableContainer>}
            </PageContent>
        </Page>
    );
}

export default departmentsList;