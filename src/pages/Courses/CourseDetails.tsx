import { Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ChapterCard } from "../../components/ChapterCard";
import { Page, PageContent } from "../../components/Page";
import { useCourseDetails } from "./courses.service";


export const CourseDetails = () => {
    const { id } = useParams();
    const { course, isLoading } = useCourseDetails(+id);


    return (
        <Page containerSize="xl">
            <PageContent  >
                <Heading >
                    {course?.name}
                </Heading>
                {isLoading && <Center>
                    <Spinner />
                </Center>}

                <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" justifyContent="space-around" >
                    {course.chapters.length > 0 && (course.chapters || [])?.map((chapter) => (
                        <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} />
                    ))}
                </Stack>
            </PageContent>
        </Page>
    );
};

