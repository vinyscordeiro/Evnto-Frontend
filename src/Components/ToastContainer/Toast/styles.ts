import styled, {css} from 'styled-components';
import {animated} from 'react-spring';

interface ToastProps{
    type?:string;
}

export const Container = styled(animated.div)<ToastProps>`
    width: 100%;
    background-color: #4661C2;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    margin-bottom: 10px;
    overflow: hidden;

    ${ (props)=> props.type==='error' && css`
        background-color: #FF4444;
    `};

    ${ (props)=> props.type==='sucess' && css`
        background-color: #43A018;   
    `};
`;

export const ToastInfo = styled.div<ToastProps>`
    display: flex;
    padding: 20px 0 16px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #D7D9E1;
    margin-left: 8px;
    height: 100%;
    width: 100%;

    ${ (props)=> props.type==='error' && css`
        background-color: #F2D6D6;
    `};

    ${ (props)=> props.type==='sucess' && css`
        background-color: #BDDFAD;   
    `};

    button{
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        outline: none;
    }
`;

export const ToastTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-right: 16px;

    svg {
        margin-right: 8px;
    }
`;

export const ToastSubtitle = styled.div`
    color: #635A5A;
    margin-left: -10px;
    width: 80%;
    font-size: 14px;
    text-align: center;
`;