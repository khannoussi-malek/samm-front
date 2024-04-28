import { ReactNode, useRef } from 'react';

import { Box, HStack, IconButton, chakra } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';
import { FiFile, FiPlus, FiX } from 'react-icons/fi';

import { FormGroup } from '@/components/FormGroup';
import { Icon } from '@/components/Icons';
import { useToastError } from '@/components/Toast';

export interface FieldUploadProps extends FieldProps {
  /**
   * This will be the header of the modal
   */
  label?: ReactNode;
  maxSize?: number;
  messageFileTooLarge?: string;
  placeholder?: string;
  accept?: string;
}

export const FieldUpload = (props: FieldUploadProps) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
    otherProps,
    resetKey,
  } = useField(props);
  const { required, name, accept } = props;
  const toastError = useToastError();

  const {
    children,
    label,
    type,
    placeholder = 'Ajouter une pièce jointe',
    helper,
    maxSize = 5_000_000, // = 5 Mo
    messageFileTooLarge,
    ...rest
  } = otherProps;
  const showError = !isValid && isSubmitted;

  const inputRef = useRef<HTMLInputElement>();

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    label,
    showError,
    name,
    ...rest,
  };

  const handleChange = ({ target }) => {
    const file = target.files[0];

    if (!file) {
      setValue(null);
      return;
    }

    const fileList = inputRef?.current?.files;
    const fileTooBig = Array.from(fileList || []).some(
      (file) => file.size > maxSize
    );
    if (fileTooBig) {
      toastError({
        title:
          messageFileTooLarge ||
          'Le fichier choisi est trop lourd (Maximum 5 Mo)',
      });
      return;
    }

    setValue({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      file,
    });
  };

  const handleReset = () => {
    inputRef.current.value = '';
    setValue(null);
  };

  const style =
    value === null
      ? {}
      : {
          bg: 'white',
          color: 'gray.600',
          border: '1px solid',
          fontWeight: 'regular',
          _focusWithin: {
            bg: 'gray.50',
          },
        };

  return (
    <FormGroup {...formGroupProps}>
      <Box position="relative">
        <chakra.label
          position="relative"
          bg="gray.100"
          display="flex"
          alignItems="center"
          px="4"
          py="3"
          borderRadius="md"
          border="1px dashed"
          borderColor="gray.300"
          transition="0.2s"
          justifyContent="space-between"
          fontWeight="medium"
          color="gray.800"
          cursor="pointer"
          _hover={{
            bg: 'gray.200',
            borderColor: 'gray.400',
          }}
          _focusWithin={{
            bg: 'gray.200',
            borderColor: 'gray.400',
          }}
          {...style}
        >
          <chakra.input
            opacity={0}
            position="absolute"
            top={0}
            left={0}
            width={0}
            type="file"
            id={id}
            ref={inputRef}
            onChange={handleChange}
            key={resetKey}
            accept={accept}
          />

          <HStack>
            {value === null ? (
              <Icon icon={FiPlus} />
            ) : (
              <Icon icon={FiFile} color="gray.400" />
            )}

            <chakra.span>{value?.name || placeholder}</chakra.span>
          </HStack>
        </chakra.label>

        {!!value && (
          <IconButton
            position="absolute"
            top="2"
            right="2"
            size="sm"
            aria-label="Supprimer la pièce jointe"
            icon={<Icon icon={FiX} />}
            onClick={handleReset}
            color="gray.500"
          />
        )}
      </Box>
    </FormGroup>
  );
};
