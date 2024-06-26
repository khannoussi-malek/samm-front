import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type ChapterCardProps = StackProps & {
    title: string;
    order: number;
    pages:number,
}
export const ChapterCard: FC<ChapterCardProps> = ({ title, order,pages, ...rest }) => {
    return (
        <Stack  p="1" flexDirection="column" justifyContent="center" minW="15rem" bgColor="#01427A" borderRadius="25" {...rest} >
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA" textAlign="center"> Chapter {order} </Text>
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA" textAlign="center"> {title} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA" textAlign="center"> {pages} pages </Text>
        </Stack>
    )
}