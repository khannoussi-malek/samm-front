import { Box, Center, HStack, Stack, StackProps, Text } from "@chakra-ui/react";
import { Chapter, CourseType } from "../../pages/Courses/courses.type";
import { FC } from "react";
import { CiViewList } from "react-icons/ci";
import { ChapterCard } from "../ChapterCard";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";

type FieldTdProps = StackProps & {
    title?: string;
    tdList?: Chapter[];
}
export const FieldTd: FC<FieldTdProps> = ({ tdList,title, ...rest }) => {
    return (
        <Stack maxW="40rem" bg='rgba(250, 251, 251, 0.6)' borderRadius="37" p="4" >
            <HStack pb="5" justifyContent="space-between">
                <HStack >
                    <Center bg="#6DCFFB" p="1" borderRadius="full" w="3rem" h="3rem"><CiViewList size="2rem" color="#ffffff" /></Center>
                    <Text fontWeight="bold" fontSize="xx-large" color="#6DCFFB">{title}</Text>
                </HStack>
                <Center as={Link} w="2rem" h="2rem" bg="#E14177" p="1" borderRadius="full"><LuArrowRight color="#ffffff" /></Center>
            </HStack>
            <Stack gap="2" spacing={0} flexDirection="row" wrap="wrap">
                {tdList?.map((chapter) => (
                    <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} minW="9rem" />
                ))}

            </Stack>
        </Stack>
    );
}