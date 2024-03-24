import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, SlideFade } from "@chakra-ui/react"
import { ReactNode } from "react"
import { TbAlertCircleFilled } from "react-icons/tb"

export type FormGroupProps = Omit<FormControlProps, "onChange" | "defaultValue" | "label" | "placeholder"> & {
    children?: ReactNode,
    id?: string,
    label?: string,
    helper?: ReactNode,
    errorMessage?: ReactNode,
    showError?: boolean,
    isRequired?: boolean,
}
export const FormGroup = ({ children, id, label, errorMessage, showError, isRequired, helper, ...props }: FormGroupProps) => (
    <FormControl isInvalid = {showError} isRequired = {isRequired} {...props}>
        {!!label && <FormLabel htmlFor={id}>
            {label}
        </FormLabel>}
        {children}
        {!!helper && <FormHelperText >
            {helper}
        </FormHelperText>}
        {!!errorMessage && <FormErrorMessage>
            <SlideFade in offsetX={-6}>
                <TbAlertCircleFilled />
                {errorMessage}
            </SlideFade>
        </FormErrorMessage>}
    </FormControl>
)