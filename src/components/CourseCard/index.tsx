import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type CourseCardProps = StackProps & {
    chapterNumber: string;
    chapterTitle: string;
    pagesNumber: string;
}
export const CourseCard: FC<CourseCardProps> = ({ chapterNumber, chapterTitle, pagesNumber, ...rest }) => {
    return (
        <Stack p="4" flexDirection="column" justifyContent="center" minH="10rem" minW="15rem" bgColor="#01427A" borderRadius="32px" {...rest} >
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA"> {chapterNumber} </Text>
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA"> {chapterTitle} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA"> {pagesNumber} </Text>
        </Stack>
    )
}