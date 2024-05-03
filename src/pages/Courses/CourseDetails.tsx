import { Center, Heading, Spinner, Stack ,HStack, Text} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ChapterCard } from "../../components/ChapterCard";
import { Page, PageContent } from "../../components/Page";
import { useCourseDetails } from "./courses.service";
import { FieldTd } from "../../components/FieldTd";
import { GiOpenBook } from "react-icons/gi";


export const CourseDetails = () => {
    const { id } = useParams();
    const { course, isLoading, isSuccess } = useCourseDetails(+id);


    return (
        <Page containerSize="full">
            <PageContent  >
                {isSuccess && (<Heading marginBottom="4rem" color="#FAFBFB">
                    {course?.name}
                </Heading>)}
                <HStack marginBottom="1rem">
                    <Center bg="#6DCFFB" p="1" borderRadius="full" w="3rem" h="3rem"><GiOpenBook size="2rem" color="#ffffff" /></Center>
                    <Stack  >
                    <Text lineHeight="1" fontWeight="bold" fontSize="xx-large" color="#6DCFFB">Cours</Text>
                    <Text lineHeight="1" fontWeight="light" fontSize="large" color="gray">1 Assignment to do</Text>
                    </Stack>
                </HStack>
                {isLoading && <Center>
                    <Spinner />
                </Center>}

                {isSuccess && <Stack gap="8"> <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" >
                    {course.chapters.length > 0 && (course.chapters || [])?.map((chapter) => (
                        <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} />
                    ))}

                </Stack>
                <FieldTd tdList={course.chapters} title="TD"/>
                <FieldTd tdList={course.chapters} title="TP"/>
                </Stack>
                }
            </PageContent>
        </Page>
    );
};

