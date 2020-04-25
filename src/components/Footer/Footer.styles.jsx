import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 56px;
    color: var(--purple-light);
    border-top: ${({ theme }) =>
        theme.mode === 'dark'
            ? `1px solid rgba(255, 255, 255, 0.1)`
            : '1px solid rgba(0, 0, 0, 0.08)'};

    flex-shrink: 0;
    padding: 15px 15px;
    text-align: center;
    font-weight: 500;
`
