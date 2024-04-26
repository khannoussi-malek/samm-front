import React, { useEffect, useState } from 'react';

import { InputGroup, InputProps, Switch } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';
import { FormGroup, FormGroupProps } from '../FormGroup';


export interface FieldSwitchProps
  extends FieldProps,
    Omit<FormGroupProps, 'placeholder'>,
    Pick<InputProps, 'type' | 'placeholder'> {
  size?: 'sm' | 'md' | 'lg';
  value?: boolean;
}

export const FieldSwitch = (props: FieldSwitchProps) => {
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
  const {
    children,
    label,
    type,
    placeholder,
    isDisabled,
    isReadOnly,
    helper,
    size = 'md',
    colorScheme = 'brand',
    ...rest
  } = otherProps;
  const { required } = props;
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
    isDisabled,
    isReadOnly,
    label,
    showError,
    ...rest,
  };

  return (
    <FormGroup {...formGroupProps}>
      <InputGroup size={size} display="flex" alignItems="center">
        <Switch
          id={id}
          value={value ?? ''}
          onChange={() => setValue(!value)}
          onBlur={() => setIsTouched(true)}
          placeholder={placeholder ? String(placeholder) : ''}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          isChecked={value ?? ''}
          colorScheme={colorScheme}
        />
        {children}
      </InputGroup>
    </FormGroup>
  );
};
