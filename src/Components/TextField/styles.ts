import styled, {css} from 'styled-components';

interface ContainerProps {
    isFocused: Boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 776px;
    height: 72px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-bottom: 2px solid #000;

    ${ props => props.isFocused && css`
        border-bottom: 2px solid #4E7EF4;
    `};
`;

export const Placeholder = styled.div<ContainerProps>`
    color: #000;
    font-size: 18px;

    ${ props => props.isFocused && css`
        color: #4E7EF4;
    `};
`;

export const InputElement = styled.input`
    padding: 0 15px;
    height: 100%;
    outline: 0;
    border: 0;
    color: #635A5A;

`;