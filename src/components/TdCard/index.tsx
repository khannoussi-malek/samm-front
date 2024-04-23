import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type TdCardProps = StackProps & {
    TdNumber: string;
    TdType: string;
}
export const TdCard: FC<TdCardProps> = ({ TdNumber, TdType, ...rest }) => {
    return (
        <Stack p="4" flexDirection="column" justifyContent="center" minW="8rem" bgColor="#01427A" borderRadius="32px" {...rest} >
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA" textAlign="center"> {TdNumber} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA" textAlign="center"> {TdType} </Text>
        </Stack>
    )
}