import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Formiz, useForm } from "@formiz/core"
import { FC } from "react"
import { FaPen, FaPlus } from "react-icons/fa"
import { ResponsiveIconButton, ResponsiveIconButtonProps } from "../../../components/ResponsiveIconButton"
import { useToastError, useToastSuccess } from "../../../components/Toast"
import { DepartmentForm } from "./DepartmentForm"
import { Department, useCreateDepartment, useDepartmentUpdate } from "./department.service"
import { useListUsers } from "../Users/user.service"
import { useListMajors } from "../majors/majour.service"

type DepartmentUpdateModalProps = Partial<ResponsiveIconButtonProps> & {
    department?: Department
    isForCreate?: boolean
}


type DepartmentFormType = {
    name: string;
    headOfDepartmentId: string;
    teatching: string[];

}

export const DepartmentUpdateModal: FC<DepartmentUpdateModalProps> = ({ department, isForCreate = false, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastSuccess = useToastSuccess();
    const toastError = useToastError();

    const { users, isLoading: isListTeacherLoding } = useListUsers("teacher");
const  {
    majors, isLoading: isListMajorsLoding
}=useListMajors();
    const headOfDepartmentOptions = users.map((user) => ({
        label: `${user.nom} ${user.prenom}`,
        value: user.id,
    }));

    const majorsOptions= majors.map((major) => ({
        label: major.name,
        value: major.id,
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
    let initialValues = {}
    if(!isForCreate){
        initialValues= {...department, teatching:department.teatching.map(v=>v.id),
            majors: department.majors.map(v=>v.id)
         }
    }
    const form = useForm<any>({
        initialValues,
        onValidSubmit: (values) => {
            let filtringValue= { ...department, ...values };
            filtringValue.teatching = (values.teatching||[]).map(String);
            filtringValue.headOfDepartmentId = `${values.headOfDepartmentId}`;
            filtringValue.majors = (values.majors||[]).map(String);
            const {id,createdAt,updaredAt,headOfDepartment,...finalValues} = filtringValue;
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
                children={isForCreate ? "Add department" : ""}
                {...rest}
            />
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> {isForCreate ? `Create department` : `Update ${department?.name}`} </ModalHeader>
                    <ModalCloseButton />
                    {!isListTeacherLoding && !isListMajorsLoding && <Formiz connect={form} autoForm  >
                        <ModalBody>
                            <DepartmentForm headOfDepartmentOptions={headOfDepartmentOptions} majorsOptions={majorsOptions} />
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