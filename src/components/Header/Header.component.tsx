import React from 'react'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop.component'
import HeaderMobile from './HeaderMobile/HeaderMobile.component'
import useMediaQuery from '../../lib/useMediaQuery'

const Header: React.FC = () => {
    const isDesktop = useMediaQuery('only screen and (min-width: 768px)')

    if (isDesktop) return <HeaderDesktop />
    return <HeaderMobile />
}
export default Header