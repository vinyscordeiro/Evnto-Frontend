import styled, {keyframes} from 'styled-components';

import {Link} from 'react-router-dom';
import background1 from '../../assets/background1.jpg';
import { Form } from '@unform/web';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #fff url(${background1}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.h1`
    margin-top: 92px;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
`;

export const SearchForm = styled(Form)`
    display: flex;
    justify-content: center;
    width: 100%;

`;


export const appearFromBottom = keyframes`
    from{
        transform: translateY(50px);
    }
    to{
        transform: translateY(0);
    }
`;

export const SearchResponseBox = styled.div`
    width: 82%; 
    max-width: 704px; 
    margin: 48px 0;
    border-radius: 2px;
`;

export const SearchResponseUnit = styled(Link)`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: space-around;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    min-height: 48px;
    border-radius: 2px;
    margin-top: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    animation: ${appearFromBottom} 0.7s;


    &:hover {
        opacity: 1;
    }

    &:active {
        background-color: #4661C2;
        color: #fff;

        svg {
            color: #fff;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
    text-align: center;

    svg {
        color: #4661C2;
        margin-right: 8px;
    }

`;


