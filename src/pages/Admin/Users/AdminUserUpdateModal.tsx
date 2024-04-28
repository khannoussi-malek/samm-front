import { Button, IconButtonProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPen, FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../../components/ResponsiveIconButton"
import { User } from "../../Auth/service"
import { UserForm } from "./UserForm"
import { useCreateUser, useUserUpdate } from "./user.service"
import { useToastError, useToastSuccess } from "../../../components/Toast"

type AdminUserUpdateModalProps = Partial<ResponsiveIconButtonProps> &{
    user?: User
    isForCreate?: boolean
}

export const AdminUserUpdateModal: FC<AdminUserUpdateModalProps> = ({ user ,isForCreate=false, ...rest}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastSuccess = useToastSuccess();
    const toastError = useToastError();

    const {mutate:updateUser, isLoading: isUpdatingLoading}=useUserUpdate({
        onSuccess: (data)=>{
            toastSuccess({
                title: "User updated",
                description:`${data.nom} ${data.prenom} updated`
            })
            onClose()
        }
    })

    const {mutate:createUser, isLoading: isCreateionLoading} = useCreateUser({
        onSuccess: (data)=>{
            toastSuccess({
                title: "User created",
                description:`${data.nom ?? ''} ${data.prenom ?? ''} updated`
            })
            onClose()
        },
        onError: (error)=>{
            toastError({
                title: "There is an error",
                description: error.response.data.message[0],
            })
        }
    })

    const isLoading = isUpdatingLoading || isCreateionLoading;

    const submit = !isForCreate? updateUser : createUser

    const form = useForm<User>({
        initialValues: !isForCreate?user:{},
        onValidSubmit: (values) => {
            submit({...user,...values});
        },
    });

    const Icon = isForCreate ? FaPlus : FaPen;

    return (
        <>
            <ResponsiveIconButton 
            onClick={(e) => {
                e.stopPropagation();
                onOpen();
            }} 
            icon={<Icon />}  
            children={isForCreate?"Add user": ""}
            {...rest}
            />
            <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {isForCreate? `Create user`:`Update ${user?.nom} ${user?.prenom}`} </ModalHeader>
                    <ModalCloseButton />
                        <Formiz connect={form} autoForm  >
                    <ModalBody>
                            <UserForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button  isLoading={isLoading} colorScheme='blue' mr={3} type="submit">
                            Submit
                        </Button>
                        <Button isLoading={isLoading} variant='ghost'>Close</Button>
                    </ModalFooter>
                        </Formiz>
                </ModalContent>
            </Modal>
        </>
    )
}