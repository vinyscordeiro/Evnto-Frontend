import styled, {css} from 'styled-components';

interface ToastContainerProps {
    right?: boolean;
}

export const Container = styled.div<ToastContainerProps>`
    position: absolute;
    top: 0;
    width: 336px;
    overflow: hidden;
    margin-top: 166px;

    ${props => props.right ? 
        css`
            right: 0;
            margin-right: 30px;
        ` :
        css`
            left: 0;
            margin-left: 30px;
    `};
`;

