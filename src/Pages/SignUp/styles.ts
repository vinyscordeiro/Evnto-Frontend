import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';
import {Form} from '@unform/web';

import Button from '../../Components/Button/index';
import background4 from '../../assets/background4.jpg';

interface ViewProps{
    isSelected: Boolean;
}

interface InputsDivProps{
    available: Boolean;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background4}) no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const ChangeView = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const View = styled.div<ViewProps>`
    cursor: pointer;
    width: 152px;
    height: 3px;
    background-color: #C4C4C4;

    ${ props => props.isSelected && css`
        background-color: #4F7EF4;
    `};
`;

export const InputsDiv = styled.div<InputsDivProps>`
    
    ${ props => !props.available && css`
        display: none;
    `};
`;

export const SignUpDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 616px;
    height: 100%;
    margin-left: auto;
`;

export const SignUpCenteredDiv = styled.div``;

export const SignUpForm = styled(Form)``;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
`;

export const ButtonAdapted = styled(Button)`
    margin: 35px 5px;
`;

export const SignInDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;

    > svg {
        margin: 2px 24px 0 0;
    }
`;

export const SignInLink = styled(Link)`
    text-decoration: none;
    font-size: 1.125em;
    color: #000;
`;
