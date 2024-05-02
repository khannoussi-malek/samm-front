import { Box, Button, Flex, Img, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

type SubjectCardProps = StackProps & {
    subjectName: string;
    teacherName: string;
    pic: string;
    details?: string;
    id?: number;
}
export const SubjectCard: FC<SubjectCardProps> = ({ id, subjectName, teacherName, pic, details = "Details", ...rest }) => {
    return (
        <Stack shadow="lg" p="5" pt="1" flexDirection="column" justifyContent="space-between" minH="15rem" bgColor="#01427A" borderRadius="20" {...rest} >
            <Flex flexDirection="column" alignItems="flex-end">
                <Text fontSize="3xl" fontWeight="bold" color="#FAFAFA"> {subjectName} </Text>
                <Text color="#FAFAFA"> {teacherName} </Text>
            </Flex>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end"  >
                <Img maxH="10rem" borderRadius="16" src={pic} alt="subject pic"
                    filter='drop-shadow(0px 0px 50px #fff)' />
                <Button as={Link} to={`${id}`} color="#ffffff" bg="#E14177" rightIcon={<Box bg="#ffffff" p="1" borderRadius="full"><LuArrowRight color="#E14177" /></Box>} mb="4">{details}</Button>
            </Stack>
        </Stack>
    )
}