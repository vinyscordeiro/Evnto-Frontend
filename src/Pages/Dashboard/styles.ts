import styled from 'styled-components';
import background1 from '../../assets/background1.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background1}) no-repeat fixed;
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

export const SearchResponseBox = styled.div`
    width: 704px; 
    margin-top: 48px;
    border-radius: 2px;
`;

export const SearchResponseUnit = styled.div`
    background-color: #E9E9E9;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
    height: 48px;
    border-radius: 2px;
    margin-top: 8px;

    &:hover{
        background-color: #c4c4c4;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;


