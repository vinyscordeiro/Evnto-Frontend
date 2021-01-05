import styled, {css, keyframes} from 'styled-components';

import { Link } from 'react-router-dom';
import background from '../../assets/background5.jpg';

interface SubtitleProps{
    isSelected ?: Boolean;
}

interface EventContainerProps{
    iconRotation ?: Boolean;
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
    margin-top: 88px;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
`;

export const EventsDiv = styled.div`
   min-width: 60em;
   margin-top: 48px;
`;

export const EventSelection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   margin-bottom: 24px;
`;

export const Subtitle = styled.div<SubtitleProps>`
    cursor: pointer;
    color: #FFF;
    font-size: 1.125rem;
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

export const appearFromBottom = keyframes`
    from{
        transform: translateY(30px);
    }
    to{
        transform: translateY(0);
    }
`;

export const Event = styled(Link)`
    cursor: pointer;
    height: 46px;
    display: flex;
    background-color: #fff;
    border-radius: 1px;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #fff;
    margin-top: 4px;
    opacity: 0.9;
    text-decoration: none;
    color: #000;
    animation: ${appearFromBottom} 0.8s;

    &:hover {
        border: 2px solid #4661C2;
        opacity: 1;
    }
`;

export const EventContainer = styled.div<EventContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${props => props.iconRotation && css`
        font-weight: bold;
        &:hover{
            color: #4232FA;
            > svg {
                transform: rotate(360deg);
                transition: transform 3s;
            }
        }
    `};
   
`;

export const EventText = styled.div`
    margin-left: 8px;
`;

export const EventButton = styled.button`
    height: 100%;
    
`;