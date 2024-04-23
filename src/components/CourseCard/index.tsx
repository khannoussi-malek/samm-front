import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type CourseCardProps = StackProps & {
    chapNum: string;
    chapTitle: string;
    pagesnbr: string;
}
export const CourseCard: FC<CourseCardProps> = ({ chapNum, chapTitle, pagesnbr, ...rest }) => {
    return (
        <Stack p="4" flexDirection="column" justifyContent="center" minH="10rem" minW="15rem" bgColor="#01427A" borderRadius="32px" {...rest} >
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA"> {chapNum} </Text>
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA"> {chapTitle} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA"> {pagesnbr} </Text>
        </Stack>
    )
}