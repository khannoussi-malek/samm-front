import React, { useEffect } from 'react';

import { FieldProps, useField } from '@formiz/core';
import { FormGroup, FormGroupProps } from '../FormGroup';


export type FieldHiddenProps = FieldProps & FormGroupProps;

export const FieldHidden: React.FC<
  React.PropsWithChildren<FieldHiddenProps>
> = (props) => {
  const { isValid, isSubmitted, errorMessage, value, setValue, otherProps } =
    useField({
      // debounce: 0,,
      ...props,
    });

  useEffect(() => {
    if (Array.isArray(value) && value.length === 0) {
      setValue(null);
    }
  }, [value, setValue]);

  const { ...rest } = otherProps as Omit<FieldHiddenProps, keyof FieldProps>;
  const showError = !isValid && isSubmitted;
  const formGroupProps = {
    errorMessage,
    showError,
    setValue,
    value,
  };

  if (showError) {
    return <FormGroup {...formGroupProps} {...rest} />;
  }
  return null;
};
