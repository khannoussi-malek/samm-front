import { Menu, MenuButton, Portal, MenuList, MenuItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { FiDownload, FiTrash } from "react-icons/fi";
import { UploadMenuProps } from "../FieldUploadDocument";
import { MenuIcon } from "../MenuIcon";
import { ActionsButtonWithBorder } from "../ActionsButtonWithBorder";

export const UploadMenu: FC<PropsWithChildren<UploadMenuProps>> = ({
    onDownload,
    onDelete,
    isLoading,
    ...rest
  }) => {
    return (
      <Menu isLazy {...rest}>
        <MenuButton isLoading={isLoading} as={ActionsButtonWithBorder} />
          <MenuList zIndex="3">
            <MenuItem
              onClick={() => onDownload()}
              icon={<MenuIcon icon={FiDownload} />}
            >
              Télécharger
            </MenuItem>
            <MenuItem
              onClick={() => {
                onDelete();
              }}
              icon={<MenuIcon icon={FiTrash} />}
            >
              Supprimer
            </MenuItem>
          </MenuList>
      </Menu>
    );
  };