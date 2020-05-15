import React from 'react';
import './NavItemIcon.styles.scss';

//redux
import { connect } from 'react-redux';
import { hideDropdown } from '../../../redux/dropdown/settings.action';

interface Props {
    children: JSX.Element;
    icon: JSX.Element;
    isDropdown?: boolean;
    dropdownHidden: boolean;
    hideDropdown: (e: boolean) => void;
}

const NavItemIcon: React.FC<Props> = ({
    children,
    icon,
    isDropdown,
    dropdownHidden,
    hideDropdown,
}) => {
    return (
        <li className="nav-item-icon">
            <a
                href="#test"
                className="icon-button"
                onMouseEnter={() => isDropdown && hideDropdown(false)}
                onClick={() => isDropdown && hideDropdown(!dropdownHidden)}
            >
                {icon}
            </a>

            {!dropdownHidden && children}
        </li>
    );
};

const mapStateToProps = ({ dropdown: { dropdownHidden } }) => ({
    dropdownHidden,
});

export default connect(mapStateToProps, { hideDropdown })(NavItemIcon);
