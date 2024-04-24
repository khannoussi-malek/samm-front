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
    const {mutate: deleteUser} = useDeleteUser( {
        onSuccess: ()=>{
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
                        ya wldy metyaked theb tfasa5 {user.nom} {user.prenom} ?
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' mr={3} onClick={()=>deleteUser({id:user.id})} >
                            Confirm
                        </Button>
                        <Button variant='ghost' onClick={onClose} > close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};