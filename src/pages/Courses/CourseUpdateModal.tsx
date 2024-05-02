import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPen, FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../components/Toast"
import { useUserUpdate } from "../Admin/Users/user.service"
import { CourseForm } from "./CourseForm"
import { useCreateCourse } from "./courses.service"
import { CourseType } from "./courses.type"

type CourseUpdateModalProps = Partial<ResponsiveIconButtonProps> & {
    course?: CourseType
    isForCreate?: boolean
}

export const CourseUpdateModal: FC<CourseUpdateModalProps> = ({ course, isForCreate = false, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastSuccess = useToastSuccess();
    const toastError = useToastError();

    const { mutate: updateUser, isLoading: isUpdatingLoading } = useUserUpdate({
        onSuccess: (data) => {
            toastSuccess({
                title: "User updated",
                description: `${data.nom} ${data.prenom} updated`
            })
            onClose()
        }
    })

    const { mutate: createUser, isLoading: isCreateionLoading } = useCreateCourse({
        onSuccess: (data) => {
            toastSuccess({
                title: "User created",
                description: `${data?.name ?? ''} updated`
            })
            onClose()
        },
        onError: (error) => {
            toastError({
                title: "There is an error",
                description: error.response.data.message[0],
            })
        }
    })

    const isLoading = isUpdatingLoading || isCreateionLoading;

    const submit = !isForCreate ? updateUser : createUser

    const form = useForm<CourseType>({
        initialValues: !isForCreate ? course : {},
        onValidSubmit: (values) => {
            submit({ ...course, ...values });
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
                children={isForCreate ? "Add course" : ""}
                {...rest}
            />
            <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {isForCreate ? `Create course` : `Update ${course?.name}`} </ModalHeader>
                    <ModalCloseButton />
                    <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <CourseForm />
                        </ModalBody>

                        <ModalFooter>
                            <Button isLoading={isLoading} colorScheme='blue' mr={3} type="submit">
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