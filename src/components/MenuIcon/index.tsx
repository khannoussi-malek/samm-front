import { FC, PropsWithChildren } from 'react';
import { Icon, IconProps } from '../Icon';


export const MenuIcon: FC<PropsWithChildren<IconProps>> = (props) => (
  <Icon fontSize="lg" color="gray.400" {...props} />
);
