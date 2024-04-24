import { Box, Button, Center, Flex, Spinner, Stack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { CourseCard } from "../../components/CourseCard";
import "./courses.css"
import { px, wrap } from "framer-motion";
import { useGetCourses } from "./courses.service";
// import { useStudentList } from "./students.service";

export const Courses = () => {
    // const { courses, isLoading, isError, refetch } = useGetCourses();
    const courses = [{chapterNumber:"14",chapterTitle:"14",pagesNumber:"14"},{chapterNumber:"13",chapterTitle:"13",pagesNumber:"13"},{chapterNumber:"12",chapterTitle:"12",pagesNumber:"12"},{chapterNumber:"11",chapterTitle:"11",pagesNumber:"11"},{chapterNumber:"10",chapterTitle:"10",pagesNumber:"10"},{chapterNumber:"9",chapterTitle:"9",pagesNumber:"9"},{chapterNumber:"8",chapterTitle:"8",pagesNumber:"8"},{chapterNumber:"7",chapterTitle:"7",pagesNumber:"7"},{chapterNumber:"6",chapterTitle:"6",pagesNumber:"6"},{chapterNumber:"5",chapterTitle:"5",pagesNumber:"5"},{chapterNumber:"4",chapterTitle:"4",pagesNumber:"4"},{chapterNumber:"3",chapterTitle:"3",pagesNumber:"3"},{chapterNumber:"2",chapterTitle:"2",pagesNumber:"2"},{chapterNumber:"1",chapterTitle:"1",pagesNumber:"1"}]



    return (
        <Box bg="#017da7" minH="100vh" p="4">
            <Stack>
            <Box className="title">
                    Courses
                </Box>
                <hr />
            <Stack flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-around"} marginTop={"30px"}>
                {courses.length > 0 && courses.map((course) => (
                    // <CourseCard className="card" chapterTitle={course.name} teacher={"Mr "+course.teacher.prenom +" "+ course.teacher.nom} />
                    <CourseCard className="card" chapterTitle={course.chapterNumber} teacher={"Mr "+course.pagesNumber +" "+ course.chapterTitle} />
                ))}
            </Stack>
            </Stack>
        </Box>
    );
};

