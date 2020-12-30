import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 3em;
    width: 316px;
    margin-top: 16px;
`;

export const BlueDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4661C2;
    width: 60px;
    height: 100%;
`;

export const InputElement = styled.input`
    padding: 0 15px;
    width: 220px;
    height: 100%;
    border: 0;
    outline: 0;

    &::placeholder{
        color: #635A5A;
        font-size: 14px;
    }
`;