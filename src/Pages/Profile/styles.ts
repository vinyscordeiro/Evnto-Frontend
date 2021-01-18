import styled, {css} from 'styled-components';
import {Form} from '@unform/web';
import {shade} from 'polished';

import background from '../../assets/background3.jpg';

interface ViewProps{
    isSelected: Boolean;
}

interface InputsDivProps{
    available: Boolean;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background}) no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const ProfileDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileBox = styled.div`
    width: 42%;
    height: 68%;
    min-width: 42em;
    min-height: 32em;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
`;

export const  AccountForm= styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > button {
        margin-top: 1em;
    }
`;

export const  AccountTitle= styled.div`
    font-size: 2.2rem;
    margin-top: 2.1em;
`;

export const  AccountSubtitle= styled.div`
    font-size: 1.125rem;
    margin: 0.5em 0;
`;


export const Photo = styled.img`
    border-radius: 50%;
`;

export const ProfileForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -4em;
`;

export const InputsDiv = styled.div<InputsDivProps>`
    
    ${ props => !props.available && css`
        display: none;
    `};
`;

export const Title = styled.h2`
    font-size: 2rem;
    margin-top: 15px;
    font-weight: normal;
`;

export const ChangeView = styled.div`
    width: 315px;
    height: 3px;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const View = styled.div<ViewProps>`
    cursor: pointer;
    display: flex;
    width: 48%;
    height: 100%;
    background-color: #c4c4c4;

    ${ props => props.isSelected && css`
        background-color: #4F7EF4;
    `};
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: auto;
`;

export const ButtonView = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40px;
    background: linear-gradient(89.79deg, #4479FF 15.27%, rgba(66, 119, 255, 0) 181.94%);
    outline: 0;
    border: 0;
    color: #FFF;
    font-family: 'Reem Kufi', sans-serif;
    font-weight: 400;
    border-radius: 0;


    &:hover{
        background-color: ${shade(0.2,'#4F7EF4')};
    }

    > svg {
        margin: 0 8px; 
        color: #FFF;
        width: 18px;
        height: 18px;
    }
`;