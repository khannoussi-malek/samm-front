import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPen, FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../../components/Toast"
import { DepartmentForm } from "./DepartmentForm"
import { Department, useCreateDepartment, useDepartmentUpdate } from "./department.service"
import { useListUsers } from "../Users/user.service"

type DepartmentUpdateModalProps = Partial<ResponsiveIconButtonProps> & {
    department?: Department
    isForCreate?: boolean
}

export const DepartmentUpdateModal: FC<DepartmentUpdateModalProps> = ({ department, isForCreate = false, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastSuccess = useToastSuccess();
    const toastError = useToastError();

    const { users, isLoading: isListTeacherLoding } = useListUsers("teacher");

    const headOfDepartmentOptions = users.map((user) => ({
        label: `${user.nom} ${user.prenom}`,
        value: user.id,
    }));

    const { mutate: updateDepartment, isLoading: isUpdatingLoading } = useDepartmentUpdate({
        onSuccess: (data) => {
            toastSuccess({
                title: "Department updated",
                description: `${data.name} updated`
            })
            onClose()
        }
    })

    const { mutate: createDepartment, isLoading: isCreateionLoading } = useCreateDepartment({
        onSuccess: (data) => {
            toastSuccess({
                title: "Department created",
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

    const submit = !isForCreate ? updateDepartment : createDepartment

    const form = useForm<Department>({
        initialValues: !isForCreate ? department : {},
        onValidSubmit: (values) => {
            submit({ ...department, ...values });
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
                children={isForCreate ? "Add department" : ""}
                {...rest}
            />
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {isForCreate ? `Create department` : `Update ${department?.name}`} </ModalHeader>
                    <ModalCloseButton />
                    {!isListTeacherLoding && <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <DepartmentForm headOfDepartmentOptions={headOfDepartmentOptions} />
                        </ModalBody>

                        <ModalFooter>
                            <Button isLoading={isLoading} colorScheme='blue' mr={3} type="submit">
                                Submit
                            </Button>
                            <Button isLoading={isLoading} variant='ghost'>Close</Button>
                        </ModalFooter>
                    </Formiz>}
                </ModalContent>
            </Modal>
        </>
    )
}