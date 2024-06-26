import { useDisclosure, Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, IconButton, Image, Text } from "@chakra-ui/react"
import { User } from "../../Auth/service";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteUser } from "./user.service";

type AdminUserDeleteModalProps = {
    user: User
}

export const AdminUserDeleteModal: FC<AdminUserDeleteModalProps> = ({ user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mutate: deleteUser, isLoading } = useDeleteUser({
        onSuccess: () => {
            onClose();
        }
    });

    return (
        <>
            <IconButton aria-label="delete" onClick={(e) => {
                e.stopPropagation();
                onOpen();
            }} icon={<MdDelete />} />
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Delete user </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text >ya wldy metyaked theb tfasa5 {user.nom} {user.prenom} ? </Text>
                        <Image src="../images/womanMeme.jpg" alt="meme pic" />
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' isLoading={isLoading} mr={3} onClick={() => deleteUser(user.id)} >
                            Confirm
                        </Button>
                        <Button variant='ghost' isLoading={isLoading} onClick={onClose} > close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};