import { Box, BoxProps, Stack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useRtl } from './hooks/useRtl';
import { useLayoutContext } from '../components/Viewport/LayoutContext';
import { FC, PropsWithChildren } from 'react';
import { Icon } from '../components/Icon';
import { useAccount } from '../pages/Auth/service';


export const MainMenu = ({ ...rest }) => {
  const {isAdmin} = useAccount();
  return (
    <Stack direction="column" spacing="2" w="90%" {...rest}>
      {!!isAdmin&&<MainMenuItem to="/admin/users">Users</MainMenuItem>}
      <MainMenuItem to="/news">News</MainMenuItem>
      <MainMenuItem to="/catchup">Catch-up</MainMenuItem>
      <MainMenuItem to="/courses">Courses</MainMenuItem>
      <MainMenuItem to="/timetable">Time table</MainMenuItem>
      <MainMenuItem to="/grades">Grades</MainMenuItem>
      <MainMenuItem to="/chatroom">Chatroom</MainMenuItem>
      <MainMenuItem to="/administrative">Administrative</MainMenuItem>
      <MainMenuItem to="/feedbak">Feedback</MainMenuItem>
      <MainMenuItem to="/history">History</MainMenuItem>
      <MainMenuItem to="/portfolio">Portfolio</MainMenuItem>
    </Stack>
  );
};

const MainMenuItem = ({ to,icon,children, ...rest }: BoxProps & { to: string,icon?:FC<PropsWithChildren<unknown>> }) => {
  const { rtlValue } = useRtl();
  const { navOnClose } = useLayoutContext();
  const { pathname } = useLocation();
  const isActive = to === '/' ? pathname === '/' : pathname?.startsWith(to);
  return (
    <Box
    as={Link}
      to={to}
      justifyContent="flex-start"
      position="relative"
      bg={isActive ? 'blue.700' : 'transparent'}
      opacity={isActive ? 1 : 0.8}
      fontWeight="bold"
      borderRadius="xl"
      shadow={isActive?"xl":"none"}
      fontSize={{ base: 'lg', md: 'xl' }}
      color={isActive ? 'gray.50' : 'gray.600'}
      px="4"
      py="2"
      _active={{ bg: 'gray.300' }}
      _hover={{
        shadow: "sm",
        bg: isActive ? 'blue.700' : 'gray.90',
        _after: {
          opacity: 1,
          w: '2rem',
        },
      }}
      _focusVisible={{
        outline: 'none',
        bg: 'gray.900',
        _after: {
          opacity: 1,
          w: '2rem',
        },
      }}
      _after={{
        opacity: isActive ? 0.5 : 0,
        content: '""',
        position: 'absolute',
        insetStart: { base: 8, md: '10%' },
        bottom: '0.2em',
        transform: rtlValue('translateX(0%)', 'translateX(50%)'),
        transition: '0.2s',
        w: 0,
        h: '2px',
        borderRadius: 'full',
        bg: 'currentColor',
      }}
      onClick={navOnClose}
      {...rest}
    >
{!!icon && <Icon icon={icon}/>}
{children}

    </Box>
  );
};
