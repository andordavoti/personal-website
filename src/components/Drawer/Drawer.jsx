import React from 'react';
import { DrawerContainer, DrawerContent, Backdrop } from './Drawer.styles';

const Drawer = ({ onClose, children, open }) => {
    const handeClose = () => {
        onClose();
    };
    return (
        <DrawerContainer aria-hidden={open ? 'false' : 'true'}>
            <Backdrop onClick={handeClose} />
            <DrawerContent>{children}</DrawerContent>
        </DrawerContainer>
    );
};

export default Drawer;
