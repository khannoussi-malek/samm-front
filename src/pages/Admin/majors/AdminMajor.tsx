import { Badge, Button, Center, Heading, Spinner, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { Page, PageContent } from "../../../components/Page";
import { useListMajors } from "./Major.service";
import { MajorUpdateModal } from "./MajorUpdateModal";

const AdminMajor = () => {
    const { onOpen } = useDisclosure()

    const  {
        majors, isLoading: isListMajorsLoding,
        isError,
        refetch
    }=useListMajors();
    return (    <Page containerSize="xl" >
    <PageContent  >
        <Heading>Major</Heading>

        <Stack direction="row" justifyContent="flex-end">
                    <MajorUpdateModal isForCreate />
                </Stack>

        {isListMajorsLoding &&
                    <Center w="full">
                        <Spinner />
                    </Center>}
                    {!!isError && <Button onClick={() => { refetch() }}>Refresh</Button>}

                    {!!majors && !isListMajorsLoding && <TableContainer>
                    <Table w="full" variant='simple' color="#04326b" bg={"#fff"} borderRadius={8}>
                        <TableCaption>majors' List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {majors?.map((major) => (
                                <Tr onClick={() => {
                                    onOpen();
                                }}
                                    _hover={{
                                        bg: "blue.50"
                                    }}>
                                
                                    <Td><Stack direction="row">
                                    <Badge p="2">{major.id}</Badge><Text>{major.name}</Text>
                                    </Stack>
                                    </Td>
                                    <Td display="flex" justifyContent="flex-end" gap="2" > <MajorUpdateModal aria-label="UpdateIcon" major={major} /> 
                                    {/* <MajorDeleteModal major={major} /> */}
                                     </Td> 
                                </Tr>
                            ))}
                        </Tbody>

                    </Table>
                </TableContainer>}
        </PageContent>
        </Page>)
}

export default AdminMajor;