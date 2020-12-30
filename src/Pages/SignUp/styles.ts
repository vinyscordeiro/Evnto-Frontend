import {Link} from 'react-router-dom';

import styled from 'styled-components';

import Button from '../../Components/Button/index';
import background4 from '../../assets/background4.jpg';

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

export const View = styled.div`
    width: 152px;
    height: 3px;
    background-color: #4F7EF4;
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

export const SignUpForm = styled.form``;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
`;

export const ButtonAdapted = styled(Button)`
    margin: 35px 0;
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
    font-size: 18px;
    color: #000;
`;
