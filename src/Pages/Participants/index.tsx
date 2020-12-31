import {
    Container,
    EventDiv,
    EventDescription,
    EventDescriptionAlignment,
    EventTitle,
    ParticipantsDiv,
    ParticipantInfo,
    ParticipantsListDiv
} from './styles';

import Header from '../../Components/Header';

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
            </EventDiv>
            <ParticipantsDiv>
                <ParticipantInfo>
                    <h1>Participantes</h1>
                    <p>
                        Total de vagas: 100<br/>
                        Total de participantes: 10<br/>
                        Vagas remanescentes: 90<br/>
                    </p>
                </ParticipantInfo>
                <ParticipantsListDiv>

                </ParticipantsListDiv>

                   
            </ParticipantsDiv>  
        </Container>
    );
}

export default Participants;
