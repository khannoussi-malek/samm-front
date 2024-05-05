import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../components/Toast"
import { CourseForm } from "./CourseForm"
import { useCreateCourse } from "./courses.service"
import { CourseType } from "./courses.type"
import { useListUsers } from "../Admin/Users/user.service"

type CourseCreateModalProps = Partial<ResponsiveIconButtonProps> & {
    course?: CourseType
}

export const CourseCreateModal: FC<CourseCreateModalProps> = ({ course, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { users, isLoading: isListTeacherLoding } = useListUsers("teacher");

    const teacherOptions = users.map((user) => ({
        label: `${user.nom} ${user.prenom}`,
        value: user.id,
    }));
    const toastSuccess = useToastSuccess();
    const toastError = useToastError();

    // const { mutate: updateUser, isLoading: isUpdatingLoading } = useUserUpdate({
    //     onSuccess: (data) => {
    //         toastSuccess({
    //             title: "course updated",
    //             description: `${data.nom} ${data.prenom} updated`
    //         })
    //         onClose()
    //     }
    // })

    const { mutate: createCourse, isLoading: isCreateionLoading } = useCreateCourse({
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

    const isLoading = isCreateionLoading;

    const submit = createCourse

    const form = useForm<CourseType>({
        initialValues: course,
        onValidSubmit: (values) => {
            submit({ ...course, ...values });
        },
    });

    const Icon = FaPlus

    return (
        <>
            <ResponsiveIconButton
                onClick={(e) => {
                    e.stopPropagation();
                    onOpen();
                }}
                icon={<Icon />}
                children={"Add course"}
                {...rest}
            />
            <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {`Create course`} </ModalHeader>
                    <ModalCloseButton />
                    <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <CourseForm teacherOptions={teacherOptions} />
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