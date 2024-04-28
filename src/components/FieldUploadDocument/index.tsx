import { ReactElement, ReactNode } from 'react';

import {
  Box,
  HStack,
  Progress,
  Stack,
  chakra,
  forwardRef,MenuProps
} from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';
import { FiFile, FiUpload } from 'react-icons/fi';
import { useToastError } from '../Toast';
import { FormGroup } from '../FormGroup';
import { Icon } from '../Icon';


export type UploadMenuProps = {
  onDownload?: () => void;
  onDelete: () => void;
  isLoading?: boolean;
} & Omit<MenuProps, 'children'>;

export interface FieldUploadDocumentProps extends FieldProps {
  /**
   * This will be the header of the modal
   */
  label?: ReactNode;
  completed?: number;
  isLoadingUpload?: boolean;
  maxSize?: number;
  messageFileTooLarge?: string;
  sectionLabel?: string;
  accept?: string;
  menu: ReactElement<UploadMenuProps>;
}

export const FieldUploadDocument = forwardRef<
  FieldUploadDocumentProps,
  'input'
>(
  (
    props: FieldUploadDocumentProps,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
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
      sectionLabel = 'Ajouter une pièce jointe',
      helper,
      completed,
      menu,
      isLoadingUpload,
      maxSize = 5_000_000, // = 5 Mo
      messageFileTooLarge,
      ...rest
    } = otherProps;
    const showError = !isValid && isSubmitted;

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

      const extension = file.name.split('.').pop();

      const doesSupportFormat =
        (accept.split(',') || []).filter(
          (format) =>
            format.toLowerCase().trim() === `.${extension}`.toLowerCase().trim()
        ).length === 0;

      if (doesSupportFormat) {
        toastError({
          title: "Le format du fichier n'est pas supporté",
        });
        return;
      }

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

      setValue(file);
    };

    return (
      <FormGroup {...formGroupProps}>
        <Box position="relative">
          <UploadComponentWrapper
            file={value}
            sectionLabel={sectionLabel}
            isLoading={isLoadingUpload}
            completed={completed}
          >
            <>
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

              {!!value && <>{menu}</>}
            </>
          </UploadComponentWrapper>
        </Box>
      </FormGroup>
    );
  }
);

const UploadComponentWrapper = ({
  file,
  isLoading,
  children,
  sectionLabel,
  completed,
  ...rest
}: {
  file: File;
  sectionLabel: string;
  isLoading: boolean;
  completed: number;
  children: JSX.Element;
}) => {
  const style =
    file === null
      ? {}
      : {
          bg: 'white',
          color: 'gray.600',
          fontWeight: 'regular',
          _focusWithin: {
            bg: 'gray.50',
          },
        };

  return (
    <>
      {!file ? (
        <chakra.label
          position="relative"
          bg="white"
          display="flex"
          px="4"
          py="3"
          borderRadius="md"
          transition="0.2s"
          justifyContent="space-between"
          fontWeight="medium"
          color="gray.700"
          borderWidth="2px"
          borderStyle="dashed"
          borderColor="brand.100"
          cursor="pointer"
          flexDirection="column"
          _hover={{
            bg: 'brand.50',
            borderColor: 'gray.400',
          }}
          _focusWithin={{
            bg: 'gray.200',
            borderColor: 'gray.400',
          }}
          {...style}
        >
          {children}

          <HStack fontWeight="700">
            <chakra.span>{sectionLabel}</chakra.span>
          </HStack>

          <HStack
            w="full"
            bg="gray.50"
            mt="3"
            _groupHover={{ bg: 'white' }}
            py="2"
            color="brand.700"
            justifyContent="center"
            borderRadius="8"
          >
            <Icon icon={FiUpload} />
            <chakra.span>Télécharger</chakra.span>
          </HStack>
        </chakra.label>
      ) : (
        <Box
          position="relative"
          bg="white"
          flexDirection="row"
          display="flex"
          px="4"
          py="3"
          borderRadius="md"
          borderColor="brand.300"
          transition="0.2s"
          justifyContent="space-between"
          fontWeight="medium"
          color="gray.700"
        >
          <Stack flex="1">
            <HStack fontWeight="700">
              <chakra.span>{sectionLabel}</chakra.span>
            </HStack>
            {isLoading && <Progress value={completed} w="95%" />}

            <HStack mt="3">
              <Icon icon={FiFile} color="brand.500" fontSize="xl" />
              <chakra.span fontSize="sm">{file.name}</chakra.span>
            </HStack>
          </Stack>
          {children}
        </Box>
      )}
    </>
  );
};
