import styled, {css} from 'styled-components';
import background from '../../assets/background5.jpg';

interface SubtitleProps{
    isSelected ?: Boolean;
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
   width: 960px;
   margin-top: 48px;
`;

export const EventSelection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   margin-bottom: 24px;
`;

export const Subtitle = styled.div<SubtitleProps>`
    color: #FFF;
    font-size: 18px;
    margin-right: 32px;
    border-bottom: 2px solid transparent;

    ${ props => props.isSelected && css`
        padding-bottom: 4px;
        border-bottom: 2px solid #4661C2;
        color: #4661C2;
    `};

    &:hover{
        color: #635A5A;
    }
`;

export const Event = styled.div`
    display: flex;
    cursor: pointer;
    background-color: #fff;
    border-radius: 1px;
    height: 46px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    border: 4px solid #fff;
    margin-top: 4px;
    opacity: 0.9;

    &:hover {
        border: 4px solid #4661C2;
        opacity: 1;
    }
`;

export const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EventTitle = styled.div`
    font-weight: bold;
`;

export const EventText = styled.div`
    margin-left: 4px;
`;

export const EventButton = styled.button`
    height: 100%;
    
`;