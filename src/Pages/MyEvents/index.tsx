import { useCallback, useState } from 'react';

import {FiCalendar, FiMap, FiClipboard, FiSettings} from 'react-icons/fi';

import Header from '../../Components/Header';

import {
    Container,
    Title,
    EventsDiv,
    EventSelection,
    Subtitle,
    Event,
    EventContainer,
    EventText
} from './styles';



const MyEvents:React.FC = () => {
    const[eventNow, setEventNow] = useState(true);
    const[eventPast, setEventPast] = useState(false);
    const[eventFuture, setEventFuture] = useState(false);

    const handleEventNow = useCallback(() => {
        setEventNow(true);
        setEventPast(false);
        setEventFuture(false);

    }, []);

    const handleEventPast = useCallback(() => {
        setEventNow(false);
        setEventPast(true);
        setEventFuture(false);
    },[]);

    const handleEventFuture = useCallback(() => {
        setEventNow(false);
        setEventPast(false);
        setEventFuture(true);
    },[]);

    return (
        <Container>
            <Header />
            <Title>Meus Eventos</Title>

            <EventsDiv>
                <EventSelection>
                    <Subtitle isSelected={eventNow} onClick={handleEventNow} >Acontecendo agora</Subtitle>
                    <Subtitle isSelected={eventPast} onClick={handleEventPast} >Próximos eventos</Subtitle>
                    <Subtitle isSelected={eventFuture} onClick={handleEventFuture} >Eventos Passados</Subtitle>
                </EventSelection>

               { eventNow && <>
                    <Event to="/eventuse">
                        <EventContainer>
                            <EventText>Retiro Seguindo seus passos</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiCalendar size={18}/>
                            <EventText>20/12/2020</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiMap size={18}/>
                            <EventText>Fazenda Mucugê</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiClipboard size={18} />
                            <EventText>Disponível</EventText>
                        </EventContainer>
                        <EventContainer iconRotation={true}>
                            <FiSettings size={18} />
                            <EventText>Definiçoes</EventText>
                        </EventContainer>

                    </Event>

                    <Event to="/eventuse">
                        <EventContainer>
                            <EventText>Retiro Seguindo seus passos</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiCalendar size={18}/>
                            <EventText>20/12/2020</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiMap size={18}/>
                            <EventText>Fazenda Mucugê</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiClipboard size={18} />
                            <EventText>Disponível</EventText>
                        </EventContainer>
                        <EventContainer iconRotation={true}>
                            <FiSettings size={18} />
                            <EventText>Definiçoes</EventText>
                        </EventContainer>
                    </Event>
                </>
               }
                
                { eventPast && <>
                    <Event to="/eventuse">
                        <EventContainer>
                            <EventText>Retiro Seguindo seus passos</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiCalendar size={18}/>
                            <EventText>20/12/2020</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiMap size={18}/>
                            <EventText>Fazenda Mucugê</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiClipboard size={18} />
                            <EventText>Disponível</EventText>
                        </EventContainer>
                        <EventContainer iconRotation={true}>
                            <FiSettings size={18} />
                            <EventText>Definiçoes</EventText>
                        </EventContainer>
                    </Event>        
                </>
                }

                { eventFuture && <>
                    <Event to="/eventuse">
                        <EventContainer>
                            <EventText>Retiro Seguindo seus passos</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiCalendar size={18}/>
                            <EventText>20/12/2020</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiMap size={18}/>
                            <EventText>Fazenda Mucugê</EventText>
                        </EventContainer>
                        <EventContainer>
                            <FiClipboard size={18} />
                            <EventText>Disponível</EventText>
                        </EventContainer>
                        <EventContainer iconRotation={true}>
                            <FiSettings size={18} />
                            <EventText>Definiçoes</EventText>
                        </EventContainer>
                    </Event>
                </>
               }
               
            </EventsDiv>          
        </Container>
    );
}

export default MyEvents;