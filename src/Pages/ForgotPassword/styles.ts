import styled from 'styled-components';
import Button from '../../Components/Button/index';

import background3 from '../../assets/background3.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background3}) no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const ForgotPasswordDiv = styled.div`
    display: flex;
    background-color: #fff;
    width: 616px;
    height: 100%;
    margin-left: auto;
    flex-direction: column;

`;
export const ForgotPasswordForm = styled.form`
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
    margin-left: auto;
`;

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #635A5A;
    padding-bottom: 30px;
`;

export const ButtonAdapted = styled(Button)`
    margin: 35px 0;
`;

export const SignInDiv = styled.div`
    display: flex;
    margin-top: 120px;
    justify-content: center;

    > svg {
        margin: 2px 24px 0 0;
    }
`;

export const SignInLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #000;
`;
