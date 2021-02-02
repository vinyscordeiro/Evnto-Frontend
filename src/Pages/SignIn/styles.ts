import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';

import background1 from '../../assets/background1.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background1}) no-repeat fixed;
    background-size: cover;
`;

export const HeaderContainer = styled.div`
    width: 100%;
`;

export const SignInContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const SignInBox = styled.div`
    background-color: #4661C2;
    margin-bottom: 50px;
    width: 616px;
    height: 416px;
    min-width: 400px;
    padding: 8px;
`;

export const SignInBoxForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 0.3em black;
    background-color: #FFF;
    height: 100%;
`;

export const Title = styled.h2`
    margin: 35px 0 15px;
    font-size: 36px;
    font-weight: 400;
`;

export const ForgotPassword = styled(Link)`
    margin: 12px 0 24px;
    text-decoration: none;
    font-size: 18px;
    color: #000;

`;
export const SignUpDiv = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: #E9E9E9;
    border-bottom: 2px solid transparent;
    padding-bottom: 4px; 

    > svg {
        margin-left: 8px;
    }

    &:hover{
        border-bottom: 2px solid #4661C2;
        transition: border 0.5s;
    }
`;

