
import {
    Container,
    Title,
    EventsDiv,
    EventSelection,
    Subtitle,
    Event,
    EventContainer,
    EventTitle,
    EventText
} from './styles';

import Header from '../../Components/Header';

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
              
                <Event>
                    <EventContainer>
                        <EventTitle>Nome:</EventTitle>
                        <EventText>Vinicius Silva Cordeiro</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Data:</EventTitle>
                        <EventText>20/12/2020</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Local:</EventTitle>
                        <EventText>Fazenda Mucugê</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Status:</EventTitle>
                        <EventText>Disponível</EventText>
                    </EventContainer>
                </Event>

                <Event>
                    <EventContainer>
                        <EventTitle>Nome:</EventTitle>
                        <EventText>Vinicius Silva Cordeiro</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Data:</EventTitle>
                        <EventText>20/12/2020</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Local:</EventTitle>
                        <EventText>Fazenda Mucugê</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Status:</EventTitle>
                        <EventText>Disponível</EventText>
                    </EventContainer>
                </Event>

                <Event>
                    <EventContainer>
                        <EventTitle>Nome:</EventTitle>
                        <EventText>Vinicius Silva Cordeiro</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Data:</EventTitle>
                        <EventText>20/12/2020</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Local:</EventTitle>
                        <EventText>Fazenda Mucugê</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Status:</EventTitle>
                        <EventText>Disponível</EventText>
                    </EventContainer>
                </Event>
            </EventsDiv>          

        </Container>
    );
}

export default MyEvents;