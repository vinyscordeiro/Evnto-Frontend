import styled, {css, keyframes} from 'styled-components';

import { Link } from 'react-router-dom';
import background from '../../assets/background5.jpg';

interface SubtitleProps{
    isSelected ?: Boolean;
}

interface EventProps{
    isOrganizer?: Boolean;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url(${background}) no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 64px;
    font-size: 60px;
    color: #fff;
    font-weight: 400;

`;

export const EventsDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 95%;
    min-width: 60%;
    margin: 40px 0 15%;
`;

export const EventSelection = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: row;
   margin-bottom: 24px;
`;

export const Subtitle = styled.div<SubtitleProps>`
    cursor: pointer;
    color: #FFF;
    font-size: 1rem;
    margin-right: 32px;
    border-bottom: 2px solid transparent;

    ${ props => props.isSelected && css`
        padding-bottom: 4px;
        border-bottom: 3px solid #4661C2;
    `};

    &:hover{
    ${ props => !props.isSelected && css`
        color: #635A5A;
    `};
        
    }
`;

const appearFromBottom = keyframes`
    from{
        transform: translateY(-30px);
    }
    to{
        transform: translateY(0);
    }
`;

const growing = keyframes`
    from{
        width: 0px;
        height: 0px;
        border-right: 48px solid transparent;
        border-top: 36px solid #5386E4;
        border-bottom: 40px solid transparent;
    }
    to{
        width: 160px;
        height: 46px;
        border: 2px solid transparent ;
        border-radius: 1px;
        background-color: #5386E4;
        height: 46px;
    }
`;

export const Event = styled(Link)`
    position: relative;
    cursor: pointer;
    height: 46px;
    display: flex;
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 1px;
    align-items: center;
    justify-content: space-around ;
    margin-top: 4px;
    opacity: 0.9;
    text-decoration: none;
    color: #000;
    animation: ${appearFromBottom} 0.8s;

    &:hover {
        border: 2px solid #4661C2;
        opacity: 1;
    }

    @media screen and (max-width: 670px) {
        font-size: 10vw;
        height: 86px;
        display: block;
        align-items: center ;
    }
`;


export const Organizer = styled.div<EventProps>`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    margin: -2px;

    svg {
        margin-left: -40px;
        margin-top: 4px;
        width: 16px;
        height: 16px;
    }

`; 

export const OrganizerFlag = styled.div`
    width: 0px;
    height: 0px;
    border-right: 48px solid transparent;
    border-top: 44px solid #5386E4;
    border-bottom: 40px solid transparent;

    /*&:hover {
        width: 160px;
        height: 46px;
        border: 2px solid transparent ;
        border-radius: 1px;
        background-color: #5386E4;
        height: 46px;
        animation: ${growing} 0.6s;
    }*/
`;



export const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin: 0 24px;

    > svg {
        color: #4661C2;
        width: 14px;
        height: 14px;
        margin-left: 0px;
    }
`;

export const EventText = styled.div`
    margin-left: 8px;
`;

export const EventButton = styled.button`
    height: 100%;
`;