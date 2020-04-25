import styled from 'styled-components';

export const Spacer = styled.div`
    height: ${props => (props.height ? props.height : '50px')};
`;
