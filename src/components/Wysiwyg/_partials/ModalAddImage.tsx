import { useCallback } from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { BiImageAdd } from 'react-icons/bi';
import { IconButton } from '..';
import { Icon } from '../../Icon';
import { FieldInput } from '../../FieldInput';


export const ModalAddImage = ({ editor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addImageForm = useForm({
    onValidSubmit: ({ url, alt }) => {
      addImage({ url, alt });
  }});
  const addImage = useCallback(
    ({ url, alt }) => {
      onClose();
      if (url) {
        editor.chain().focus().setImage({ src: url, alt }).run();
      }
    },
    [editor, onClose]
  );

  if (!editor) {
    return null;
  }
  return (
    <>
      <IconButton icon={<Icon icon={BiImageAdd} />} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Formiz connect={addImageForm} autoForm>
            <ModalHeader>Add image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing="6">
                <FieldInput
                  name="url"
                  label="URL"
                  placeholder="https://example.com/image.png"
                  required="Required"
                />
                <FieldInput
                  name="alt"
                  label="Alt"
                  placeholder="Image description"
                />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button variant="solid" type="submit">
                Add image
              </Button>
            </ModalFooter>
          </Formiz>
        </ModalContent>
      </Modal>
    </>
  );
};
