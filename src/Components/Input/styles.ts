import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 3em;
    width: 19.75em;
    margin-top: 16px;
    color: #000;
`;

export const BlueDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(270deg, #4661C2 15%, rgba(101, 119, 183, 0) 91.67%), #4F7EF4;
    width: 60px;
    height: 100%;

    > svg {
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const InputElement = styled.input`
    padding: 0 15px;
    width: 220px;
    height: 100%;
    border: 0;
    outline: 0;
    background-color: #D4DFF9;

    &::placeholder{
        color: #635A5A;
        font-size: 14px;
    }
`;