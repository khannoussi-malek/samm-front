import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC, useState } from "react"
import { FaPen, FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../../components/Toast"
import { Major, useCreateMajor, useMajorUpdate } from "./Major.service"
import { MajorForm } from "./MajorForm"

type MajorUpdateModalProps = Partial<ResponsiveIconButtonProps> & {
    major?: Major
    isForCreate?: boolean
}

export const MajorUpdateModal: FC<MajorUpdateModalProps> = ({ major, isForCreate = false, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [plan, setPlan] = useState(0);
    const toastSuccess = useToastSuccess();
    const toastError = useToastError();


    const { mutate: updateMajor, isLoading: isUpdatingLoading } = useMajorUpdate({
        onSuccess: (data) => {
            toastSuccess({
                title: "Major updated",
                description: `${data.name} updated`
            })
            onClose()
        }
    })

    const { mutate: createMajor, isLoading: isCreateionLoading } = useCreateMajor({
        onSuccess: (data) => {
            toastSuccess({
                title: "Major created",
                description: `${data.name ?? ''} updated`
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

    const submit = !isForCreate ? updateMajor : createMajor
    let initialValues = {}
    if(!isForCreate){
        initialValues= {...major
         }
    }
    const form = useForm<any>({
        initialValues,
        onValidSubmit: (values) => {
            let filtringValue= { ...major, ...values, plan };
            console.log(filtringValue)
            // const {id,createdAt,updaredAt,...finalValues} = filtringValue;
            submit(filtringValue);
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
                children={isForCreate ? "Add major" : ""}
                {...rest}
            />
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {isForCreate ? `Create major` : `Update ${major?.name}`} </ModalHeader>
                    <ModalCloseButton />
                    <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <MajorForm setPlan={setPlan} />
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