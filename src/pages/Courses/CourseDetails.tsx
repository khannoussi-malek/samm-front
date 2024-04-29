import { Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { Page, PageContent } from "../../components/Page";
import { useCourseDetails } from "./courses.service";
import { ChapterCard } from "../../components/ChapterCard";
import { useEffect, useState } from "react";
import { CourseType } from "./courses.type";

interface CourseDetailsProps {
    id: string;
}

export const CourseDetails = ({id}:CourseDetailsProps) => {
    const [course, setCourse] = useState<CourseType>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCourse = async () => {
          try {
            const data  = await useCourseDetails(+id);
            setCourse(data);
          } catch (error) {
            console.error('Error fetching course:', error);
          }
        };
        fetchCourse(); 
        setIsLoading(false)
    }, [id]);
    console.log(course)

    return (
        <Page containerSize="xl">
        <PageContent  >
            <Heading >
                {course.name}
            </Heading>
                {isLoading && <Center>
                    <Spinner />
                    </Center>}
                    
            <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" justifyContent="space-around" >
            {course.chapters.length > 0 && course.chapters.map((chapter) => (
                <ChapterCard title={chapter.name} order={chapter.order} pages={chapter.pages} />
            ))}
            </Stack>
        </PageContent>
    </Page>
    );
};

