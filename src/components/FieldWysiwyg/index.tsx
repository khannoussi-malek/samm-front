import { useEffect, useState } from 'react';

import { Spinner } from '@chakra-ui/react';
import { useField } from '@formiz/core';
import { FieldInputProps } from '../FieldInput';
import { FormGroup } from '../FormGroup';
import { Wysiwyg } from '../Wysiwyg';


export const FieldWysiwyg =<FormattedValue = string> (props: FieldInputProps<FormattedValue>) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    isValidating,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);
  const { children, label, type, placeholder, helper, autoFocus, ...rest } =
    otherProps;
  const { required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted);

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
    ...rest,
  };

  return (
    <FormGroup {...formGroupProps}>
      <Wysiwyg value={value} onChange={setValue} />

      {(isTouched || isSubmitted) && isValidating && (
        <Spinner size="sm" flex="none" />
      )}
    </FormGroup>
  );
};
