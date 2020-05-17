import React from 'react';
import './NavItemText.styles.scss';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { hideDropdown } from '../../../../redux/dropdown/settings.action';
import { selectDropdown } from '../../../../redux/dropdown/settings.selectors';

interface Props {
    children?: JSX.Element;
    icon?: JSX.Element;
    isDropdown?: boolean;
    label?: string;
}

const NavItemText: React.FC<Props> = ({
    children,
    icon,
    isDropdown,
    label,
}) => {
    const dropdownHidden = useSelector(selectDropdown);
    const dispatch = useDispatch();

    return (
        <li className="nav-item-text">
            <div
                className="text-button"
                onMouseEnter={() =>
                    dispatch(hideDropdown(isDropdown ? false : true))
                }
                onClick={() =>
                    isDropdown && dispatch(hideDropdown(!dropdownHidden))
                }
            >
                <span className="label">{label}</span>
                {icon}
            </div>

            {!dropdownHidden && children}
        </li>
    );
};

export default NavItemText;
