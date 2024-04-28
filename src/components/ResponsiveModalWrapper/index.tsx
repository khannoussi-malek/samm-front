import { ReactNode } from 'react';

import { Box, Modal, ModalProps, forwardRef, useBreakpointValue, useTheme } from '@chakra-ui/react';


export const useIsMobile = (
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | undefined | null = null,
  ssr: boolean = false
) => {
  const theme = useTheme();

  if (!breakpoint) {
    breakpoint = theme.layout.breakpoints.desktop;
  }

  return useBreakpointValue(
    {
      base: true,
      [breakpoint]: false,
    },
    {
      ssr,
    }
  );
};

type ResponsiveModalWrapperProps = {
  children: ReactNode;
} & ModalProps;

export const ResponsiveModalWrapper = forwardRef<
  ResponsiveModalWrapperProps,
  'div'
>(({ size = 'md', children, ...rest }, ref) => {
  const isMobile = useIsMobile();

  return (
    <Modal size={isMobile ? 'full' : size} {...rest}>
      <Box
        // This code exists to prevent the modal from going under the tabs for
        // browsers that have the URL bar at the bottom of the screen.
        // We are using the fill-available that is not supported by the browsers
        // because there is a tool like postcss that will add the prefix.

        sx={
          isMobile
            ? {
                '.chakra-modal__content': {
                  minH: 'fill-available',
                },
              }
            : undefined
        }
      >
        {children}
      </Box>
    </Modal>
  );
});
