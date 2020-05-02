import React, { useState, useEffect, useRef } from 'react'
import './DropdownMenu.styles.scss'

//icons
import { IoMdContacts, IoMdHome } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaTools, FaSun } from 'react-icons/fa'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import { CSSTransition } from 'react-transition-group'

//redux
import { connect } from 'react-redux'
import { hideDropdown } from '../../../../redux/dropdown/dropdown.action'
import socialLinks from '../../../../lib/socialLinks'

interface Props {
    hideDropdown: (e: boolean) => void
}

interface PropsDropdownItem {
    children: JSX.Element | string
    leftIcon?: JSX.Element | string
    rightIcon?: JSX.Element
    goToMenu?: string
    link?: string
}

const DropdownMenu: React.FC<Props> = ({ hideDropdown }) => {
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState<number | null>(null)
    const dropdownRef = useRef(null)

    useEffect(() => setMenuHeight(dropdownRef.current?.firstChild.offsetHeight), [])

    const calcHeight = (el: HTMLElement) => {
        const height = el.offsetHeight
        setMenuHeight(height)
    }

    const DropdownItem: React.FC<PropsDropdownItem> = ({ children, leftIcon, rightIcon, goToMenu, link }) => {

        return <a target={link ? '_blank' : ''} href={socialLinks[link]} className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
            <span className="icon-button">{leftIcon}</span>
            {children}
            <span className="icon-right">{rightIcon}</span>
        </a>
    }

    return <div onMouseLeave={() => hideDropdown(true)} className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

        <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem leftIcon={<IoMdHome />}>Home</DropdownItem>
                <DropdownItem leftIcon={<FaTools />} >Projects</DropdownItem>
                <DropdownItem leftIcon={<FaSun />} >Theme</DropdownItem>
                <DropdownItem
                    leftIcon={<IoMdContacts />}
                    rightIcon={<GoChevronRight />}
                    goToMenu="contact">
                    Contact
            </DropdownItem>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'contact'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<GoChevronLeft />}>
                    <h2>Contact</h2>
                </DropdownItem>
                <DropdownItem link='email' leftIcon={<MdEmail />}>Email</DropdownItem>
                <DropdownItem link='linkedin' leftIcon={<FaLinkedin />}>LinkedIn</DropdownItem>
                <DropdownItem link='github' leftIcon={<FaGithub />}>Github</DropdownItem>
            </div>
        </CSSTransition>
    </div>
}


export default connect(null, { hideDropdown })(DropdownMenu)