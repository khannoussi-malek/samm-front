import { Center, Heading, Spinner, Stack ,HStack, Text, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { ChapterCard } from "../../components/ChapterCard";
import { Page, PageContent } from "../../components/Page";
import { useCourseDetails } from "./courses.service";
import { FieldTd } from "../../components/FieldTd";
import { GiOpenBook } from "react-icons/gi";
import { FieldAbsence } from "../../components/FieldAbsence";
import { useAccount } from "../Auth/service";
import { FieldGradesStudent } from "../../components/FieldGradesStudent";
import { LuArrowRight } from "react-icons/lu";



export const CourseDetails = () => {
    const { id } = useParams();
    const { course, isLoading, isSuccess } = useCourseDetails(+id);
    const{isStudent} = useAccount();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Page containerSize="full">
            <PageContent  >
                {isSuccess && (<Heading marginBottom="4rem" color="#FAFBFB">
                    {course?.name}
                </Heading>)}
                <PageContent>
                <HStack marginBottom="1rem" >
                    <Center bg="#6DCFFB" p="1" borderRadius="full" w="3rem" h="3rem"><GiOpenBook size="2rem" color="#ffffff" /></Center>
                    <Stack  >
                    <Text lineHeight="1" fontWeight="bold" fontSize="xx-large" color="#6DCFFB">Cours</Text>
                    <Text lineHeight="1" fontWeight="light" fontSize="large" color="gray">1 Assignment to do</Text>
                    </Stack>
                    <Center marginLeft="3rem" as={Link} w="2rem" h="2rem" bg="#E14177" p="1" borderRadius="full" onClick={onOpen}><LuArrowRight color="#ffffff" /></Center>
                </HStack>
                {isLoading && <Center>
                    <Spinner />
                </Center>}

                {isSuccess && <Stack gap="8"> <Stack gap="8" spacing={0} flexDirection="row" wrap="wrap" >
                    {course.chapters.length > 0 && (course.chapters || [])?.map((chapter) => (
                        <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} />
                    ))}
                </Stack>
                <HStack w="full" justifyContent="flex-start" gap={6}>
                <Stack gap={6}>
                <FieldTd tdList={course.chapters} title="TD"/>
                <FieldTd tdList={course.chapters} title="TP"/>
                </Stack>
                <Stack gap={6}>
                    {!isStudent && <FieldAbsence nombreAbsence={2} nombreHeuresTotale={5} />}
                    {!isStudent && <FieldGradesStudent/>}
                </Stack>
                </HStack>
                </Stack>
                }
                </PageContent>
            </PageContent>
            <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#01427A" fontWeight="bold">Chapter List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
          <Stack gap="2" spacing={0} flexDirection="row" wrap="wrap">
                {course.chapters.map((chapter) => (
                    <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} minW="9rem" />
                ))}
            </Stack>
            <Stack marginTop="5rem">
            <Text color="#01427A" fontWeight="bold">Assignment Description :</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officia sint alias nobis deserunt repellendus placeat! Ipsam minus eum sit voluptatem. Itaque quam vitae nam natus assumenda, odit ad asperiores!</Text>
                <Text color="#01427A" fontWeight="bold">Assignment Submission :</Text>
                <Input />

            </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Page>
    );
};

