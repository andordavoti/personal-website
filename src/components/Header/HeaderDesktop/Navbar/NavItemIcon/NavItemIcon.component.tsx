import React from 'react'
import './NavItemIcon.styles.scss'

//redux
import { connect } from 'react-redux'
import { hideDropdown } from '../../../../../redux/dropdown/dropdown.action'

interface Props {
    children: JSX.Element
    icon: JSX.Element
    isDropdown?: boolean
    dropdownHidden: boolean
    hideDropdown: (e: boolean) => void
    label?: string
}

const NavItemIcon: React.FC<Props> = ({ children, icon, isDropdown, dropdownHidden, hideDropdown, label }) => {

    return <li className="nav-item-icon" >
        <div className="icon-button" onMouseEnter={() => isDropdown && hideDropdown(false)} onClick={() => isDropdown && hideDropdown(!dropdownHidden)}>
            <span className='label'>{label}</span>
            <a className='icon'>{icon}</a>
        </div>

        {!dropdownHidden && children}
    </li>
}

const mapStateToProps = ({ dropdown: { dropdownHidden } }) => ({ dropdownHidden })

export default connect(mapStateToProps, { hideDropdown })(NavItemIcon)