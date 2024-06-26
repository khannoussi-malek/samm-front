import React, { FC, RefObject } from 'react';

import { IconButton, IconButtonProps, forwardRef } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

export interface ActionsButtonProps
  extends Omit<IconButtonProps, 'aria-label'> {
  label?: string;
  ref?: RefObject<HTMLInputElement>;
}

export const ActionsButton: FC<React.PropsWithChildren<ActionsButtonProps>> =
  forwardRef(({ label, ...rest }, ref) => {
    return (
      <IconButton
        ref={ref}
        display="inline-flex"
        borderRadius="full"
        variant="ghost"
        color="inherit"
        colorScheme="gray"
        bg="transparent"
        opacity="0.5"
        _hover={{ opacity: 1, bg: 'rgba(0, 0, 0, 0.05)' }}
        _focus={{ opacity: 1, boxShadow: 'outline' }}
        _active={{ bg: 'rgba(0, 0, 0, 0.1)' }}
        icon={<FiMoreVertical />}
        aria-label={label ??"Actions"}
        data-test="actions-button"
        {...rest}
      />
    );
  });

ActionsButton.displayName = 'ActionsButton';
