import { Center, CircularProgress, CircularProgressLabel, HStack, Stack, StackProps, Table, TableContainer, Text } from "@chakra-ui/react";
import { FC } from "react";

type FieldGradesStudentProps = StackProps & {

}

export const FieldGradesStudent: FC<FieldGradesStudentProps> = ({ ...rest }) => {
    return (
        <Center minW="30rem" bg='rgba(109, 207, 251, 0.3)' borderRadius="37" p="4" {...rest}>
            <Stack w="full" alignItems="center">
                <Text fontSize="26" fontWeight="bold" color="#01427A" lineHeight="10">Grades</Text>
                <TableContainer w="full" marginTop="2rem" marginBottom="2rem">
                    <Table bg='rgba(109, 207, 251, 0    )' size="lg" justifyContent="center" lineHeight="10">
                        <thead >
                            <tr>
                                <th><Text color="#AFAFAF" fontSize="20" fontWeight="medium">ds</Text></th>
                                <th><Text color="#AFAFAF" fontSize="20" fontWeight="medium">exam</Text></th>
                                <th><Text color="#AFAFAF" fontSize="20" fontWeight="medium">tp</Text></th>
                                <th><Text color="#AFAFAF" fontSize="20" fontWeight="medium">m</Text></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Text textAlign="center">--</Text></td>
                                <td><Text textAlign="center">--</Text></td>
                                <td><Text textAlign="center">--</Text></td>
                                <td><Text textAlign="center">--</Text></td>
                            </tr>
                        </tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Center>
    );
}