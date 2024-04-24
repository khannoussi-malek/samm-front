import { useDisclosure, Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, IconButton } from "@chakra-ui/react"
import { User } from "../../Auth/service";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteUser } from "./user.service";

type AdminUserDeleteModalProps = {
    user: User
}

export const AdminUserDeleteModal: FC<AdminUserDeleteModalProps> = ({ user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteUserMutation = useDeleteUser();

    const handleDeleteUser = () => {
        deleteUserMutation.mutate(user.id);
        onClose(); // Close the modal after deletion
    };

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
                        ya wldy metyaked theb tfasa5 {user.nom} {user.prenom} ?
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' mr={3} onClick={useDeleteUser(user.id)} >
                            Confirm
                        </Button>
                        <Button variant='ghost' onClick={onClose} > close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};