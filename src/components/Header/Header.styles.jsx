import styled from 'styled-components'
import { Container } from '../utils/Container'
//Breakpoints
import { Media } from '../utils/Breakpoints'
const { sm } = Media

export const HeaderWrapper = styled.div`
    z-index: 999;
    width: 100%;
    position: sticky;
    top: 0;
    &.scrolled {
        box-shadow: var(--nav-shadow);
        background-color: var(--navbar-bg);
    }
`

export const HeaderContainer = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    @media ${Media.sm} {
        height: 50px;
    }
`

export const Name = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: var(--text-on-bg);
`

export const HeaderNav = styled.ul`
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;

    @media ${sm} {
        display: flex;
        align-items: center;
    }
`

export const NavItem = styled.li`
    line-height: 1rem;
    color: var(--text-on-primary);
    padding: 1rem;
    display: inline;
    text-align: center;
    font-weight: 500;
`

export const DrawerToggle = styled.div`
    @media ${sm} {
        display: none;
    }
`

export const DrawerContent = styled.div`flex: 1 0 auto;`

export const DrawerFooter = styled.div`flex: 0 1 auto;`