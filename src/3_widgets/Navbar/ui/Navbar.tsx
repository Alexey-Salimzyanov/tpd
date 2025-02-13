import { classNames } from '6_shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from '6_shared/ui/AppLink/AppLink';
import cls from './Navbar.module.css';
import { Drawer } from '6_shared/ui/Drawer/Drawer';
import { Button, VariantButton } from '6_shared/ui/Button/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ControlledAccordions from '6_shared/ui/Accordion/Accordion';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

interface NavbarProps {
    className?: string
}

export function Navbar(props: NavbarProps) {
    const { className } = props;
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleNavigation = (path: string) => () => {
        navigate(path); 
        setOpen(false); 
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div>
                <Button variant={VariantButton.CLEAR} onClick={toggleDrawer(true)}>
                    <MenuOutlinedIcon fontSize='large' />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <div style={{width: '250px'}}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleNavigation('/')}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Главная" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleNavigation('/about')}>
                                    <ListItemIcon>
                                        <InfoIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="О сайте" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider/>
                        <ControlledAccordions />
                    </div>
                </Drawer>
            </div>
            <div className={cls.links}>

            </div>
        </div>
    );
}