import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    height: 92px;
    width: 100%;
    align-items: center;
    background-color: #fff;
`;

export const Logo = styled.a`
    font-size: 48px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    margin-left: 72px;
`;

export const User = styled.img`
    cursor: pointer;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-left: auto;
    margin: 0 88px;
`;
