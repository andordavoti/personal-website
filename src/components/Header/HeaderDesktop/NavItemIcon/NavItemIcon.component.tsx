import React from 'react';
import './NavItemIcon.styles.scss';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { hideDropdown } from '../../../../redux/dropdown/settings.action';
import { selectDropdown } from '../../../../redux/dropdown/settings.selectors';

interface Props {
    children: JSX.Element;
    icon: JSX.Element;
    isDropdown?: boolean;
    label?: string;
}

const NavItemIcon: React.FC<Props> = ({
    children,
    icon,
    isDropdown,
    label,
}) => {
    const dropdownHidden = useSelector(selectDropdown);
    const dispatch = useDispatch();

    return (
        <li className="nav-item-icon">
            <div
                className="icon-button"
                onMouseEnter={() => isDropdown && dispatch(hideDropdown(false))}
                onClick={() =>
                    isDropdown && dispatch(hideDropdown(!dropdownHidden))
                }
            >
                <span className="label">{label}</span>
                <a href="#test">{icon}</a>
            </div>

            {!dropdownHidden && children}
        </li>
    );
};

export default NavItemIcon;
