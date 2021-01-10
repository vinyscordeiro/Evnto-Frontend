import styled from 'styled-components';

import background from '../../assets/background2.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const EventDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const EventDescription = styled.div`
    width: 100%;
    
`;

export const EventInfo = styled.div`
    display: flex;
    margin: auto; 
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

export const ParticipantsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ParticipantsTitle = styled.div`
    font-size: 48px;
    margin-top: 24px;
`;

export const ParticipantInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    height: 48px;
`;

export const ParticipantInfoText = styled.div`
    color: #fff;
    margin-left: 32px;
`;

export const ParticipantsListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 1040px;
    margin-top: 12px;
    max-width: 1052px;

`;

export const Participant = styled.div`
    cursor: pointer;
    width: 510px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-left: 4px solid #4232FA;

    img {
        margin: 0;
        padding: 0;
        width: 53px;
        height: 46px;
    }

    &:hover{
        background-color: #4232FA;
        color: #fff;
        transition: background-color 0.4s;
    }
`;

export const ParticipantText = styled.div`
    margin: 0 16px;
`;
