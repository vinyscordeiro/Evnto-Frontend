import {
    Container,
    EventDiv,
    EventDescription,
    EventDescriptionAlignment,
    EventTitle,
    ParticipantsDiv,
    ParticipantsTitle,
    ParticipantInfo,
    ParticipantInfoText,
    ParticipantsListDiv,
    Participant,
    ParticipantText
} from './styles';

import Header from '../../Components/Header';
import Profile from '../../assets/julia.jpg';

const Participants: React.FC = () => {
    return(
        <Container>
            <Header />
            <EventDiv>
                <EventDescription>
                    <EventDescriptionAlignment>
                        <EventTitle>
                            Seguindo seus passos
                        </EventTitle>
                    </EventDescriptionAlignment>
                </EventDescription>
                <ParticipantInfo>
                        <ParticipantInfoText>Total de vagas: 100 </ParticipantInfoText>
                        <ParticipantInfoText>Total de participantes: 10</ParticipantInfoText>
                        <ParticipantInfoText>Vagas remanescentes: 90</ParticipantInfoText>
                </ParticipantInfo>
            </EventDiv>
            <ParticipantsDiv>
            <ParticipantsTitle>Participantes</ParticipantsTitle>
                <ParticipantsListDiv>
                    <Participant>
                        <img src={Profile} alt="Nome"/>
                        <ParticipantText>Nome: Vinicius Silva Cordeiro</ParticipantText>
                        <ParticipantText>Sexo: Feminino</ParticipantText>
                        <ParticipantText>Idade: 22</ParticipantText>
                    </Participant>     
                    <Participant>
                        <img src={Profile} alt="Nome"/>
                        <ParticipantText>Nome: Vinicius Silva Cordeiro</ParticipantText>
                        <ParticipantText>Sexo: Feminino</ParticipantText>
                        <ParticipantText>Idade: 22</ParticipantText>
                    </Participant> 
                    <Participant>
                        <img src={Profile} alt="Nome"/>
                        <ParticipantText>Nome: Vinicius Silva Cordeiro</ParticipantText>
                        <ParticipantText>Sexo: Feminino</ParticipantText>
                        <ParticipantText>Idade: 22</ParticipantText>
                    </Participant> 
                </ParticipantsListDiv>

                   
            </ParticipantsDiv>  
        </Container>
    );
}

export default Participants;
