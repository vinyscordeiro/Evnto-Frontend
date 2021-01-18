import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { Form } from '@unform/web';


import background from '../../assets/background2.jpg';


interface DefinitionButtonProps{
    isRed ?: Boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const EventDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EventDescription = styled.div`
    width: 100%;
    height: 280px;
`;

export const EventInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 56px 0;
`;

export const EventDescriptionAlignment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 232px;
    background: #253A44 url(${background}) no-repeat fixed;
`;

export const EventTitle = styled.div`
    font-size: 72px;
    color: #fff;
`;

export const EventDays = styled.div`
    width: 100%;
    height: 55px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #FFF;
`;

export const EventInfoForm = styled(Form)``;

export const EventName = styled.div`
    font-size: 48px;
`;

export const EventType = styled.div`
    font-size: 24px;
    margin-bottom: 18px;
    color: #635A5A;
`;

export const EventText = styled.div`
    font-size: 18px;
`;

export const EventBar = styled.div`
    min-width: 254px;
    width: 344px;
    margin-left: 8%;
`;

export const EventAlterButton = styled.div`
    cursor: pointer;
    background-color: #4E7EF4;
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #FFF;

    > svg {
        margin-right: 16px;
    }

        &:hover{
            background-color: ${shade(0.2,"#4E7EF4")};
        }

        &:active{
            font-size: 22px;
            transition: font-size 0.1s;
        }
`;

// Date
export const EventDateEditDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
`;

export const EventDateEditTitle = styled.div`
    font-size: 16px;
    color: #4F7EF4;
    display: flex;
    flex-direction: row;
`;

export const EventDateEditInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    align-items: center;
`;


export const EventDateEditShow = styled.div`
    font-size: 24px;
    margin-left: 12px;
`;

export const EventDateButton = styled.button`
    cursor: pointer;
    font-size: 12px;
    border: 0;
    outline: 0;
    margin-left: auto;
    font-family: 'Reem Kufi', sans-serif;
    background-color: #FFF;

    > svg {
        margin-left: 4px;
    }

    &:hover {
        color:  #4F7EF4;

        > svg {
        color: #4F7EF4;
        }
    }

`;

// Host

export const HostDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    margin: 4px 24px;
`;

export const HostName = styled.div`
    margin-left: 16px;
    font-size: 18px;
`;

export const HostPhoto = styled.img`
    border-radius: 50%;
`;

// Participant 

export const ParticipantLink = styled(Link)`
    text-decoration: none;
    margin-left: 24px;
    color: #000;

    &:hover{
        color: #4E7EF4;
    }
`;

// Definition

export const DefinitionDiv = styled.div`
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DefinitionTitle = styled.div`
    color: #4F7EF4;
`;

export const DefinitionButton = styled.button<DefinitionButtonProps>`
    height: 36px;
    width: 150px;
    display: flex;
    background-color: #FFF;
    flex-direction: row;
    align-items: center;
    border: 0;
    outline: none;
    cursor: pointer;

    ${props => props.isRed && css`
        &:hover{
            color: #ec2300;
        }
    `}
    
`;

export const DefinitionText = styled.div`
    margin-left: 12px;
    font-family: 'Reem Kufi', sans-serif;
    font-size: 18px;
`;
