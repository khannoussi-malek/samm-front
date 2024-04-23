import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { LuLogOut, LuMoon, LuSun } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { useAccount } from '../pages/Auth/service';

export const AccountMenu = ({ ...rest }) => {

  const { colorMode, toggleColorMode } = useColorMode();
  const account = useAccount();
  const navigate = useNavigate();

  return (
    <Box color="gray.800" _dark={{ color: 'white' }}>
      <Menu placement="bottom-end" {...rest}>
        <MenuButton borderRadius="full" _focusVisible={{ shadow: 'outline' }}>
          <HStack><Avatar size="sm" icon={<></>} name={account.data?.nom}>
            {account.isLoading && <Spinner size="xs" />}
          </Avatar>
          <Flex direction="column" alignItems="flex-start">
          <Text >{account.data?.nom} {account.data?.prenom}</Text>
          <Text>{account.data?.email}</Text></Flex>
          </HStack>
        </MenuButton>
        <MenuList maxW="12rem" overflow="hidden">
          <MenuItem
            icon={
              <Icon
                icon={colorMode === 'dark' ? LuSun : LuMoon}
                fontSize="lg"
                color="gray.400"
              />
            }
            onClick={() => toggleColorMode()}
          >
            {colorMode === 'dark'
              ? 'switch ColorMode to Light'
              : 'switch ColorMode to Dark'}
          </MenuItem>
          <MenuDivider />
          <MenuItem
            icon={<Icon icon={LuLogOut} fontSize="lg" color="gray.800" />}
            onClick={() => navigate('/logout')}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
