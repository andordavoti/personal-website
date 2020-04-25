import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #ff3860;
    --red-dark: #ff1443;
    --red-light: #ff5c7c;
    --blue: #498afb;
    --blue-dark: #2674fa;
    --blue-light: #6ca0fc;
    --orange: #fa8142;
    --orange-dark: #f96a1f;
    --orange-light: #fb9865;
    --green: #09c372;
    --green-dark: #07a15e;
    --green-light: #0be586;
    --purple: #9166cc;
    --purple-dark: #7d4bc3;
    --purple-light: #a481d5;
    --yellow: #ffdd57;
    --yellow-dark: #ffd633;
    --yellow-light: #ffe47a;
    --pink: #ff4088;
    --pink-dark: #ff1c72;
    --pink-light: #ff649e;
    --gray0: #939395;
    --gray1: #7d7d80;
    --gray2: #b2becd;
    --gray3: #67676b;
    --gray4: #515155;
    --gray5: #3c3c40;
    --gray6: #26262b;
    --orange-pink: linear-gradient(to bottom right,var(--gray6),var(--gray5) 85%);
    --green-grad: linear-gradient(to bottom right,var(--green-light),var(--green-dark) 85%);

    ${props =>
        props.theme.mode === 'light'
            ? `
    --bg-primary: rgb(255, 255, 255);
    --card-bg: var(--bg-primary);
    --navbar-bg: var(--bg-primary);
    --text-on-secondary: rgb(25, 41, 104);
    --text-on-bg: var(--text-on-secondary);
    --text-normal: #121212;
    --text-normal-1: #252525;
    --text-variant-1: rgb(251, 243, 148);
    --text-variant-2: rgb(133, 131, 236);
    --text-variant-3: rgb(253, 173, 162);
    --text-variant-4: rgb(133, 131, 236);
    --list-item-hover-1: rgba(66, 133, 244, 0.149);
    --list-item-active: rgba(66, 133, 244, 0.149);
    --shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    --nav-shadow: var(--shadow);
    --card-hover: var(--text-variant-2);
    --drawer-bg:  var(--bg-primary);
`
            : `
    --bg-primary: var(--gray6);
    --navbar-bg: var(--gray5);
    --card-bg: var(--gray5);
    --text-on-secondary: #fafafa;
    --text-on-bg: var(--text-on-secondary);
    --text-normal: #fafafa;
    --text-normal-1: #fafafa;
    --text-variant-1: var(--pink);
    --text-variant-2: var(--yellow-light);
    --text-variant-3: var(--pink-light);
    --text-variant-4: var(--blue-light);
    --list-item-hover-1: rgba(255, 255, 255, 0.149);
    --list-item-active: rgba(255, 255, 255, 0.129);
    --card-hover: var(--blue-light);
    --nav-shadow: 4px 0 10px -3px #010101;
    --shadow: 4px 0 10px -3px #010101;
    --drawer-bg:  var(--gray6);
`}
}
`;
