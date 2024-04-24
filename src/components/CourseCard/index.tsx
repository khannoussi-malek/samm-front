import { Box, Button, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type CourseCardProps = StackProps & {
    chapterTitle: string;
    teacher: string;
}
export const CourseCard: FC<CourseCardProps> = ({ chapterTitle, teacher, ...rest }) => {
    return (
        <Stack p="4" flexDirection="column" minH="10rem" minW="15rem" bgColor="#01427A" borderRadius="32px" position={"relative"} {...rest} >
            <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA" textAlign={"right"}> {chapterTitle} </Text>
            <Text fontSize="lg" fontWeight="300" color="#FAFAFA" textAlign={"right"}> {teacher} </Text>
            <Box width={"60%"} height={"auto"} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCja6pfn253mIq7QgOsL_hQq2FkiMGBMJOV6GFMBtLiw&s" alt="subject"/>
            </Box>
            <Button backgroundColor={"#E14177"} position={"absolute"} bottom={"15px"} right={"15px"} width={"45%"} borderRadius={"0px"} color={"white"} >
                Details
            </Button>
        </Stack>
    )
}