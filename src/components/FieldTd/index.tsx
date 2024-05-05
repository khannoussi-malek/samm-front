import { Button, Center, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackProps, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { CiViewList } from "react-icons/ci";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Chapter } from "../../pages/Courses/courses.type";
import { ChapterCard } from "../ChapterCard";

type FieldTdProps = StackProps & {
    title?: string;
    tdList?: Chapter[];
};

export const FieldTd: FC<FieldTdProps> = ({ tdList, title, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Stack minW="50rem" bg='rgba(250, 251, 251, 0.6)' borderRadius="37" p="4" {...rest}>
            <HStack pb="5" justifyContent="space-between">
                <HStack >
                    <Center bg="#6DCFFB" p="1" borderRadius="full" w="3rem" h="3rem"><CiViewList size="2rem" color="#ffffff" /></Center>
                    <Text fontWeight="bold" fontSize="xx-large" color="#6DCFFB">{title}</Text>
                </HStack>
                <Center as={Link} w="2rem" h="2rem" bg="#E14177" p="1" borderRadius="full" onClick={onOpen}><LuArrowRight color="#ffffff" /></Center>
            </HStack>
            <Stack gap="2" spacing={0} flexDirection="row" wrap="wrap">
                {tdList?.filter(
                    (_, key) => key < 4
                ).map((chapter) => (
                    <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} minW="9rem" />
                ))}

            </Stack>
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Files List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack gap="2" spacing={0} flexDirection="row" wrap="wrap">
                {tdList.map((chapter) => (
                    <ChapterCard title={chapter?.name || ''} order={chapter?.order || 0} pages={chapter?.pages || 0} minW="9rem" />
                ))}

            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    );
}