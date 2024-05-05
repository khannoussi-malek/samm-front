import { Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Page, PageContent } from "../../components/Page";
import { SubjectCard } from "../../components/SubjectCard";
import { groupsOptions } from "./ChapterForm";
import { CourseCreateModal } from "./CourseCreateModal";
import { useGetCourses } from "./courses.service";
import { useAccount } from "../Auth/service";
import { majorsOptions } from "./CourseForm";

export const Courses = () => {
    const { courses, isLoading, isError, refetch } = useGetCourses();
    const { isAdmin } = useAccount();
    console.log(courses)

    return (
        <Page containerSize="full">
            <PageContent  >
                <Heading marginBottom="2rem" color="#F9FAF9">
                    All Courses
                </Heading>
                {!isAdmin && <Stack direction="row" justifyContent="space-between" marginBottom="1rem" width="8xl">
                    <Select onChange={(e) => { console.log("choosing group") }} placeholder='Select option' options={majorsOptions}>
                    </Select>

                    <CourseCreateModal />
                </Stack>}
                {isLoading && <Center>
                    <Spinner />
                </Center>}
                {isError && <Center >
                    <Button onClick={() => refetch()} >Refetch</Button></Center>}
                <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" >
                    {courses.length > 0 && courses.map((course) => (
                        <SubjectCard id={course.id} subjectName={course.name} teacherName={`${course.teacher?.nom} ${course.teacher?.prenom}`} pic="./images/math.png" />
                    ))}


                </Stack>
            </PageContent>
        </Page>
    );
};

