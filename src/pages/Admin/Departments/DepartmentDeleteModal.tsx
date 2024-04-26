import { Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { Department, useDeleteDepartment } from "./department.service";

type DepartmentDeleteModalProps = {
    department: Department
}

export const DepartmentDeleteModal: FC<DepartmentDeleteModalProps> = ({ department }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mutate: deleteDepartment, isLoading } = useDeleteDepartment({
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
                    <ModalHeader>Delete department </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        ya wldy metyaked theb tfasa5 {department.name} ?
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' isLoading={isLoading} mr={3} onClick={() => deleteDepartment(department.id)} >
                            Confirm
                        </Button>
                        <Button variant='ghost' isLoading={isLoading} onClick={onClose} > close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};