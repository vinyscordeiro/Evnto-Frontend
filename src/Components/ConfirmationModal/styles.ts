import styled, { css } from 'styled-components';

interface ButtonColorProps {
    color ?: "blue" | "red" | "green";
}

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(10,23,55,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    position: absolute;
    width: 417px;
    background-color: #fff;
    text-align: right;
`;

export const Title = styled.div`
    font-family: 'Reem Kufi', sans-serif;
    font-size: 22px;
    padding: 0 36px;
`;

export const Subitle = styled.div`
    font-family: 'Reem Kufi', sans-serif;
    font-size: 14px;
    color: #635A5A;
    padding: 10px 36px;

`;

export const ConfirmationButton = styled.button<ButtonColorProps>`
    cursor: pointer;
    width: 100%;
    height: 42px;
    font-family: 'Reem Kufi', sans-serif;
    outline: 0;
    border: 0;
    color: #FFF;

    background: linear-gradient(89.79deg, #4479FF 15.27%, rgba(66, 119, 255, 0) 181.94%);

    ${ props=> props.color === "red" && css`
        background: linear-gradient(89.79deg, #FF4444 15.27%, rgba(66, 119, 255, 0) 181.94%);
    ` }

    ${ props=> props.color === "green" && css`
        background: linear-gradient(89.79deg, #43A018 15.27%, rgba(66, 119, 255, 0) 181.94%);
    `}
`;

export const CancelButton = styled.button`
    cursor: pointer;
    position: relative;
    border: none;
    right: 8px;
    top: 8px;
    background-color: #fff;

`;


