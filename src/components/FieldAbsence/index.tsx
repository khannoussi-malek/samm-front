import { Center, CircularProgress, CircularProgressLabel, HStack, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type FieldAbsenceProps = StackProps & {
    nombreAbsence: number;
    nombreHeuresTotale: number;
}

export const FieldAbsence: FC<FieldAbsenceProps> = ({ nombreAbsence, nombreHeuresTotale, ...rest }) => {
    const val = nombreAbsence*100/5;
    const absenceRest = 5 - nombreAbsence;
    return (
        <Center minW="30rem" bg='rgba(109, 207, 251, 0.3)' borderRadius="37" p="3" {...rest}>
            <Stack alignItems="center">
                <CircularProgress value={val} color='#E14177' size="8rem">
                    <CircularProgressLabel display="inilne" fontWeight="bold" color="#01427A">{val}%</CircularProgressLabel>
                </CircularProgress>
                <HStack alignItems="center">
                    <Text fontSize="3rem" color="#E14177" fontWeight="bold">{absenceRest}<Text display="inline" fontSize="3rem" color="#E14177" fontWeight="bold">h</Text></Text>
                    <Stack >
                        <Text fontSize="24" fontWeight="medium" lineHeight="1">left from <Text display="inline" color="#01B3EF" fontWeight="medium">5</Text> absences</Text>
                        <Text fontSize="20" fontWeight="light" lineHeight="0"> Total of <Text display="inline" color="#01427A" fontWeight="medium">{nombreHeuresTotale}</Text> hours / Semester </Text>
                    </Stack>
                </HStack>
            </Stack>
        </Center>
    );
}