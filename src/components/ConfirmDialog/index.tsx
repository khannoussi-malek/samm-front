import { FC } from 'react';

import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

import { ResponsiveModalWrapper as Modal  } from '../ResponsiveModalWrapper';

export type ConfirmDialogProps = {
  title: string;
  content: string;
  onClose: () => void;
} & Omit<ModalProps, 'isOpen'>;

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title,
  content,
  onClose,
  children,
  ...rest
}) => {
  return (
    <Modal isOpen={true} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>{content}</ModalBody>

        <ModalFooter gap={2}>
          <Button onClick={onClose}>Cancel</Button>
          {children}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
