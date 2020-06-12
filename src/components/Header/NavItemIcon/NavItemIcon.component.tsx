import React from 'react';
import './NavItemIcon.styles.scss';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { hideDropdown } from '../../../redux/dropdown/settings.action';
import { selectDropdown } from '../../../redux/dropdown/settings.selectors';

interface Props {
    children: JSX.Element;
    icon: JSX.Element;
    isDropdown?: boolean;
}

const NavItemIcon: React.FC<Props> = ({ children, icon, isDropdown }) => {
    const dropdownHidden = useSelector(selectDropdown);
    const dispatch = useDispatch();

    return (
        <li className="nav-item-icon">
            <a
                href="#test"
                className="icon-button"
                onMouseEnter={() => dispatch(hideDropdown(isDropdown ? false : true))}
                onClick={() => isDropdown && dispatch(hideDropdown(!dropdownHidden))}
            >
                {icon}
            </a>
            {!dropdownHidden && children}
        </li>
    );
};

export default NavItemIcon;
