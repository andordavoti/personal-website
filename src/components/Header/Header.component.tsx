import React from 'react';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop.component';
import HeaderMobile from './HeaderMobile/HeaderMobile.component';
import useMediaQuery from '../../lib/useMediaQuery';

const Header: React.FC = () =>
    useMediaQuery('only screen and (max-width: 768px)') ? <HeaderMobile /> : <HeaderDesktop />;

export default Header;
