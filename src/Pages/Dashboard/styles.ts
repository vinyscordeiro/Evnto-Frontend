import styled, {keyframes} from 'styled-components';

import {Link} from 'react-router-dom';
import background1 from '../../assets/background1.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background1}) no-repeat;
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


export const appearFromBottom = keyframes`
    from{
        transform: translateY(50px);
    }
    to{
        transform: translateY(0);
    }
`;

export const SearchResponseBox = styled.div`
    width: 704px; 
    margin-top: 48px;
    border-radius: 2px;
    animation: ${appearFromBottom} 0.7s;
`;

export const SearchResponseUnit = styled(Link)`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: space-around;
    color: #000;
    text-decoration: none;
    background-color: #E9E9E9;
    opacity: 0.9;
    height: 48px;
    border-radius: 2px;
    margin-top: 8px;

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

    svg {
        color: #4661C2;
        margin-right: 8px;
    }

`;


