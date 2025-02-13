import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './Drawer.module.css';
import {Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';

interface DrawerProps extends MuiDrawerProps {
  className?: string;
  width?: string
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, children, open, onClose } = props;

  return (
    <div className={classNames(cls.drawer, {}, [className])}>
      <MuiDrawer open={open} onClose={onClose}>
        {children}
      </MuiDrawer>
    </div>
 );
}