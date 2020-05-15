import React, { useRef } from 'react';
import './DropdownMenu.styles.scss';

//redux
import { connect } from 'react-redux';
import { hideDropdown } from '../../../../redux/dropdown/settings.action';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import socialLinks from '../../../../lib/socialLinks';

interface Props {
    hideDropdown: (e: boolean) => void;
}

interface PropsDropdownItem {
    children: string;
    leftIcon: JSX.Element | string;
    link?: string;
}

const DropdownMenu: React.FC<Props> = ({ hideDropdown }) => {
    const dropdownRef = useRef(null);

    const DropdownItem: React.FC<PropsDropdownItem> = ({
        children,
        leftIcon,
        link,
    }) => {
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks[link]}
                className="menu-item"
            >
                <span className="icon-button">{leftIcon}</span>
                {children}
            </a>
        );
    };

    return (
        <div
            onMouseLeave={() => hideDropdown(true)}
            className="dropdown"
            ref={dropdownRef}
        >
            <div className="menu">
                <DropdownItem link="email" leftIcon={<MdEmail />}>
                    Email
                </DropdownItem>
                <DropdownItem link="linkedin" leftIcon={<FaLinkedin />}>
                    LinkedIn
                </DropdownItem>
                <DropdownItem link="github" leftIcon={<FaGithub />}>
                    Github
                </DropdownItem>
            </div>
        </div>
    );
};

export default connect(null, { hideDropdown })(DropdownMenu);
