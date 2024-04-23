import { useEffect, useState } from 'react';

import { FieldProps, useField } from '@formiz/core';
import { GroupBase } from 'react-select';
import { FormGroup, FormGroupProps } from '../FormGroup';
import { Select, SelectProps } from '../Select';


export interface FieldSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends FieldProps,
    FormGroupProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  options?: Option[];
  isClearable?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  components?: { Option };
  selectProps?: SelectProps<Option, IsMulti, Group>;
}

export const FieldSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: FieldSelectProps<Option, IsMulti, Group>
) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);
  const { required } = props;
  const {
    children,
    label,
    options = [],
    placeholder,
    helper,
    isLoading,
    isDisabled,
    isClearable,
    isSearchable,
    size = 'md',
    selectProps,
    ...rest
  } = otherProps;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    label,
    showError,
    isDisabled,
    ...rest,
  };

  return (
    <FormGroup {...formGroupProps}>
      <Select
        id={id}
        value={options?.find((option) => option.value === value) || ''}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder || 'Select...'}
        onChange={(fieldValue) =>
          setValue(fieldValue ? fieldValue.value : null)
        }
        size={size}
        options={options}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isError={showError}
        {...selectProps}
      />
      {children}
    </FormGroup>
  );
};
