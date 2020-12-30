import styled from 'styled-components';
import {shade} from 'polished';

import background from '../../assets/background3.jpg';

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
    width: 732px;
    height: 560px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px;
`;

export const Photo = styled.img`
    border-radius: 50%;
`;

export const ProfileForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -80px;
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
    margin-top: 15px;
`;

export const ChangeView = styled.div`
    width: 315px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const View = styled.div`
    display: flex;
    width: 148px;
    height: 3px;
    background-color: #4F7EF4;
`;

export const ButtonDiv = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: auto;
`;

export const ButtonView = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40px;
    background-color: #4F7EF4;
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
        margin-right: 8px; 
    }
`;