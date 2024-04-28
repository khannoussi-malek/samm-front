import React from 'react';

import { forwardRef } from '@chakra-ui/react';
import { ActionsButton, ActionsButtonProps } from '../ActionsButton';


export const ActionsButtonWithBorder = forwardRef<ActionsButtonProps, 'button'>(
  (props, ref: React.RefObject<HTMLInputElement>) => (
    <ActionsButton variant="@default" ref={ref} {...props} />
  )
);
