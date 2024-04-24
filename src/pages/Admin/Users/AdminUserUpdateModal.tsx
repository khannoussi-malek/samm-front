import { Button, IconButton, IconButtonProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { FaPen } from "react-icons/fa"
import { UserForm } from "./UserForm"
import { Formiz, useForm } from "@formiz/core"
import { User } from "../../Auth/service"
import { useNavigate } from "react-router-dom"
import { useCreateUser } from "./user.service"
import { FC } from "react"

type AdminUserUpdateModalProps = IconButtonProps &{
    user: User
}

export const AdminUserUpdateModal: FC<AdminUserUpdateModalProps> = ({ user , ...rest}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastSuccess = useToast();

    const navigate = useNavigate();
    const { mutate: createUser } = useCreateUser({
        onSuccess: () => {
            toastSuccess({
                title: "waaaw nigaaaa",
                status: 'success',
            });
            navigate('/login')
        },
        onError: (error) => {
            toastSuccess({
                title: error.response.data.message[0],
                status: 'error',
            });
        }
    })
    const form = useForm<User>({
        initialValues: user,
        onValidSubmit: (values) => {
            console.log(values);
            createUser(values);
        },
    });
    return (
        <>
            <IconButton aria-label="edit" onClick={(e) => {
                e.stopPropagation();
                onOpen();
            }} icon={<FaPen />} />
            <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formiz connect={form} autoForm  >
                            <UserForm />
                        </Formiz>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type="submit">
                            Submit
                        </Button>
                        <Button variant='ghost'>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}