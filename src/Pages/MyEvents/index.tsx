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

import Header from '../../Components/Header';

import {FiCalendar, FiUser, FiMap, FiClipboard, FiSettings} from 'react-icons/fi';

const MyEvents:React.FC = () => {

    return (
        <Container>
            <Header />
            <Title>Meus Eventos</Title>

            <EventsDiv>
                <EventSelection>
                    <Subtitle isSelected={true}>Acontecendo agora</Subtitle>
                    <Subtitle>Próximos eventos</Subtitle>
                    <Subtitle>Eventos Passados</Subtitle>
                </EventSelection>
              
                <Event to="/eventuse">
                    <EventContainer>
                        <FiUser size={18}/>
                        <EventText>Vinicius Silva Cordeiro</EventText>
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
            </EventsDiv>          

        </Container>
    );
}

export default MyEvents;