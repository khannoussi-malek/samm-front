import { Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { Page, PageContent } from "../../components/Page";
import { useGetCourses } from "./courses.service";
import { SubjectCard } from "../../components/SubjectCard";

export const Courses = () => {
    const { courses, isLoading, isError, refetch } = useGetCourses();
    console.log(courses)

    return (
        <Page containerSize="xl">
            <PageContent  >
                <Heading >
                    Courses
                </Heading>

                {isLoading && <Center>
                    <Spinner />
                </Center>}
                {isError && <Center >
                    <Button onClick={() => refetch()} >Refetch</Button></Center>}
                <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" justifyContent="space-around">
                    {courses.length > 0 && courses.map((course) => (
                        <SubjectCard id={course.id} subjectName={course.name} teacherName={`${course.teacher.nom} ${course.teacher.prenom}`} pic="./images/math.png" />
                    ))}


                </Stack>
            </PageContent>
        </Page>
    );
};

