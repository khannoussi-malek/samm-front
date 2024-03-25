import { Input, InputProps } from "@chakra-ui/react";
import { FormGroup, FormGroupProps } from "../FormGroup";
import { FieldProps, useField } from '@formiz/core';


type Value = InputProps['value'];

type UsualInputProps = 'placeholder' | 'autoFocus' | 'type';

export type FieldInputProps<FormattedValue = Value> = FieldProps<
  Value,
  FormattedValue
> &
  FormGroupProps &
  Pick<InputProps, UsualInputProps> & {
    inputProps?: Omit<InputProps, UsualInputProps>;
  };

export const FieldInput = <FormattedValue = Value>(props: FieldInputProps<FormattedValue>) => {
  const field = useField(props);
  const { inputProps, children, placeholder, type, autoFocus, ...rest } = field.otherProps;

  const formGroupProps = {
    ...rest,
    errorMessage: field.errorMessage,
    id: field.id,
    isRequired: field.isRequired,
    showError: field.shouldDisplayError,
  }

  return (
    <FormGroup {...formGroupProps}>
      <Input
        {...inputProps}
        id={field.id}
        value={field.value ?? ""}
        type={type}
        onChange={(e) => field.setValue(e.target.value)}
        placeholder={placeholder ? String(placeholder) : ""}
        onFocus={() => field.setIsTouched(false)}
        onBlur={() => field.setIsTouched(true)}
        autoFocus={autoFocus}
        
      />
    </FormGroup>
  );
}