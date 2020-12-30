import styled from 'styled-components';
import background from '../../assets/background2.jpg';

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
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 56px 0;
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

export const EventButton = styled.button`
    background: #43A018;
    cursor: pointer;
    width: 339px;
    height: 64px;
    border-radius: 0;

    font-family: 'Reem Kufi', sans-serif;
    -webkit-font-smoothing: antialised;
    font-size: 24px;
    color: #FFF;

    border: 1px solid #43A018;
    box-shadow: inset 0 0 20px rgba(67, 160, 24, 0.3);
    outline: 1px solid ;
    outline-color: rgba(67, 160, 24, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
        box-shadow: inset 0 0 20px rgba(67, 160, 24, .5), 0 0 20px rgba(67, 160, 24, .2);
        outline-color: rgba(67, 160, 24, 0);
        outline-offset: 15px;
    }
    
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

export const EventInfoDiv = styled.div`
    max-width: 776px;
`;

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
    width: 344px;
`;

export const EventRegistration = styled.div`
    background-color: #4E7EF4;
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const EventRegistrationTitle = styled.div`
    color: #fff;
    font-size: 16px;
`;

export const EventRegistrationText = styled.div`
    max-width: 180px;
    margin-top: 8px;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 8px;
    }
`;

export const EventRegistrationDate = styled.div`
    color: #fff;
    font-size: 24px;
`;

export const EventBarInfo = styled.div`
    width: 100%;
    height: 112px;
    border-left: 4px solid #4F7EF4;
    margin-top: 25px;
    padding-left: 25px;
`;

export const EventBarTitle = styled.div`
    font-size: 36px;
`;

export const EventBarSubtitle = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;

    > svg {
        margin-right: 16px;
    }
`;

export const HostPhoto = styled.img`
    border-radius: 50%;
`;


export const EventBarSubtitleTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4px;
`;

export const EventBarTextBig = styled.div`
    font-size: 24px;
`;

export const EventBarTextSmall = styled.div`
    font-size: 10px;
    color: #635A5A;
`;

export const EventBarTextNormal = styled.div`
    font-size: 14px;
`;