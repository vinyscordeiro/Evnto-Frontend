import {
    Container,
    EventDiv,
    EventDescription,
    EventInfo,
    EventDescriptionAlignment,
    EventTitle
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

                <EventInfo>
                

                   
                </EventInfo>  
                
            </EventDiv>
        </Container>
    );
}

export default Participants;
