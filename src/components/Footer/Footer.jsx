import React from 'react'
import { FooterWrapper } from './Footer.styles'

const Footer = () => (
    <FooterWrapper>
        {' '}
            &copy; Andor Davoti | Made with{' '}
        <span role="img" aria-label="heart">
            ❤️
            </span>{' '}
            and React.
    </FooterWrapper>
)

export default Footer