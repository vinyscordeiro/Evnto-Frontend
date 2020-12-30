import styled, {css} from 'styled-components';
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
    width: 1360px;
    display: flex;
    padding: 56px 0;
    margin: auto;
    justify-content: space-between;    
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
