import { shade } from 'polished';
import { Link } from 'react-router-dom';

import styled, {css} from 'styled-components';

interface SidebarLinkUnitProps{
    isSelected: Boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 344px;
    height: 100%;
    position: fixed;
    background-color: #1C1717;
    right: 0;
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
