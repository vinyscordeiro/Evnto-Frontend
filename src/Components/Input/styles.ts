import styled, { css } from 'styled-components';

interface ColoredDivProps {
    isErrored: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 4.3em;
    width: 19.75em;
    color: #000;
    
`;

export const InputDiv = styled.div`
    display: flex;
    height: 3em;
    width: 100%;
    color: #000;
`;

export const ColoredDiv = styled.div<ColoredDivProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(270deg, #4661C2 15%, rgba(101, 119, 183, 0) 91.67%), #4F7EF4;
    width: 60px;
    height: 100%;
    transition: background-color 0.5s;

    > svg {
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
    }

    ${ props=> props.isErrored && css`
        background: linear-gradient(270deg, #C24646 15%, rgba(183, 101, 101, 0) 91.67%), #F44F4F;
        transition: background-color 0.5s;
    ` }
`;

export const InputElement = styled.input<ColoredDivProps>`
    padding: 0 15px;
    width: 220px;
    height: 100%;
    border: 0;
    outline: 0;
    background-color: #D4DFF9;
    transition: background-color 0.7s;

    &::placeholder{
        color: #635A5A;
        font-size: 14px;
    }

    ${props => props.isErrored && css`
        background-color: #F9D4D4;
        transition: background-color 0.7s;
    `};
`;

export const ErrorDiv = styled.div`
   font-size: 12px;
   margin-top: 2px;
`;
