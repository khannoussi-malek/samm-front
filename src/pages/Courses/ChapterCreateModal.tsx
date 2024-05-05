import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../components/Toast"
import { ChapterForm } from "./ChapterForm"
import { useCreateChapter } from "./courses.service"
import { Chapter } from "./courses.type"

type ChapterCreateModalProps = Partial<ResponsiveIconButtonProps> & {
    chapter?: Chapter
    isForCreate?: boolean
}

export const ChapterCreateModal: FC<ChapterCreateModalProps> = ({ chapter, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const { mutate: createChapter, isLoading: isCreateionLoading } = useCreateChapter({
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

    const submit = createChapter

    const form = useForm<Chapter>({
        initialValues: chapter,
        onValidSubmit: (values) => {
            submit({ ...chapter, ...values });
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
                    <ModalHeader> {`Create chapter`} </ModalHeader>
                    <ModalCloseButton />
                    <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <ChapterForm />
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