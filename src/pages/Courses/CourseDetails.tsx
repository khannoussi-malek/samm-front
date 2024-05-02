import { Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ChapterCard } from "../../components/ChapterCard";
import { Page, PageContent } from "../../components/Page";
import { useCourseDetails } from "./courses.service";
import { FieldTd } from "../../components/FieldTd";


export const CourseDetails = () => {
    const { id } = useParams();
    const { course, isLoading, isSuccess } = useCourseDetails(+id);


    return (
        <Page containerSize="full">
            <PageContent  >
                {isSuccess && (<Heading marginBottom="2rem" >
                    {course?.name}
                </Heading>)}
                {isLoading && <Center>
                    <Spinner />
                </Center>}

                {isSuccess && <Stack gap="8"> <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" >
                    {course.chapters.length > 0 && (course.chapters || [])?.map((chapter) => (
                        <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} />
                    ))}
                    
                </Stack>
                <FieldTd />
                </Stack>
                }
            </PageContent>
        </Page>
    );
};

