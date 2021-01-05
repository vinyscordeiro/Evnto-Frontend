import { Link } from 'react-router-dom';

import styled, {css, keyframes} from 'styled-components';
import {shade} from 'polished';

import {FiX} from 'react-icons/fi';

interface SidebarLinkUnitProps{
    isSelected: Boolean;
}

export const Container = styled.div`
`;

export const appearFromRight = keyframes`
    from{
        transform: translateX(344px);
    }
    to{
        transform: translateX(0);
    }
`;

export const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 344px;
    height: 100%;
    position: fixed;
    background-color: #1C1717;
    right: 0;
    top: 0;
    z-index: 1;
    animation: ${appearFromRight} 0.5s`;

export const CloseSiderbarIcon = styled(FiX)`
    cursor: pointer;
    position: absolute;
    left: 16px;
    top: 12px;
    color: #fff;

    &:hover{
        color: ${shade(0.5, "#fff")};
    }
`;

export const ProfileImg = styled.img`
    margin-top: 64px;
    border-radius: 50%;
    width: 170px;
    height: 167px;
`;

export const WelcomeDiv = styled.div`
    margin-top: 16px;
    text-align: center;
`;

export const WelcomeTitle = styled.div`
    color: #fff;
`;

export const WelcomeName = styled.div`
    font-size: 24px;
    color: #fff;
`;

export const SidebarLinkDiv = styled.div`
    width: 100%;
    margin-top: 40px;
`;


export const SidebarLinkUnit = styled(Link)<SidebarLinkUnitProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 48px;
    font-size: 16px;

    &:hover{
        cursor: pointer;
        background-color: #2B2121;
    }


    svg{
        margin-right: 16px;
        width: 18px;
        height: 18px;
    }

    ${ props => props.isSelected && css`
        svg{
            color: #4479FF;
        }
    `};


`;

export const MadeInDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 85%;
    color: #fff;
    font-size: 14px;
    border-top: 2px solid #fff;
    padding: 8px 0 16px 0;;
    margin-top: auto;
`;


export const ProfileContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 64px;
    cursor: pointer;
`;

export const ProfileOptions = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 50%;
`;