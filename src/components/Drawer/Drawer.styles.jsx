import styled from 'styled-components'

export const DrawerContainer = styled.aside`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    &[aria-hidden='false'] {
        width: 100%;
        height: 100%;
    }
`

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.2s cubic-bezier(0, 0, 0.3, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    ${DrawerContainer + "[aria-hidden='false']"} & {
        opacity: 1;
    }
`

export const DrawerContent = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 256px !important;
    padding: 0 0 20px 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    transition: 200ms linear;
    transition-property: opacity;
    transition-property: transform;
    background: var(--drawer-bg);
    will-change: transform;
    ${DrawerContainer + "[aria-hidden='false']"} & {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        height: 100%;
    }
`