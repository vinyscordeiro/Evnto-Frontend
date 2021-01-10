import { FiCalendar, FiMap } from 'react-icons/fi';

import Header from '../../Components/Header';
import BarComponent from '../../Components/BarComponent';

import {
    Container,
    EventDiv,
    EventDescription,
    EventInfo,
    EventDescriptionAlignment,
    EventTitle,
    EventButton,
    EventDays,
    EventInfoDiv,
    EventName,
    EventType,
    EventText,
    EventBar,
    EventRegistration,
    EventRegistrationTitle,
    EventRegistrationDate,
    EventRegistrationText,
    BCSubtitle,
    HostPhoto,
    BCInfoDiv,
    BCTextBig,
    EventBarTextNormal,
    EventBarTextSmall,
} from './styles';

import Julia from '../../assets/julia.jpg';

const EventUse: React.FC = () => {
    return(
        <Container>
            <Header />
            <EventDiv>
                <EventDescription>
                    <EventDescriptionAlignment>
                        <EventTitle>
                            Seguindo seus passos
                        </EventTitle>
                        <EventButton>Quero participar</EventButton>
                    </EventDescriptionAlignment>
                    <EventDays>
                        FALTAM 4 DIAS
                    </EventDays>
                </EventDescription>

                <EventInfo>
                   <EventInfoDiv>
                       <EventName>Seguindo seus passos</EventName>
                       <EventType>14 retiro espiritual jovens</EventType>
                       <EventText>
                            À semelhança do Congresso 2019, as inscrições deste ano serão oferecidas/realizadas via lotes (datas e valores a seguir). Isso favorece a organização do evento, além de garantir parcelamento e melhor preço para aqueles que já têm definida a presença.
                            Trazemos duas novidade este ano:
                            Entre os dias 21 e 22 de janeiro, realizaremos nosso Congresso em parceria com a AMBB (Associação de Músicos Batistas do Brasil). Além de nos abençoarem na condução dos momentos de louvor e adoração, dividirão o auditório conosco para, juntos, refletirmos sobre a temática 'SEGUINDO SEUS PASSOS' e os impactos da inovação e tecnologia na vida da atual liderança eclesiástica.
                            Faça já sua inscrição os dias 01 e 25 de dezembro de 2020, ofereceremos um lounge para os nossos pastores.

                            Nesse espaço teremos speakers (palestrantes), em horários específicos, tratando sobre temas atuais e relevantes para nossas vidas e ministério.
                        </EventText>
                   </EventInfoDiv>

                   <EventBar>
                       <EventRegistration>
                           <EventRegistrationTitle>Inscrições até</EventRegistrationTitle>
                           <EventRegistrationText>
                               <FiCalendar size={24} color="#fff"/>
                               <EventRegistrationDate>24/12/2020</EventRegistrationDate>
                           </EventRegistrationText>
                       </EventRegistration>

                        <BarComponent title="Data" >
                            <BCSubtitle>
                                <FiCalendar size={24} color="#000" />
                                <BCTextBig>24/12/2020</BCTextBig>
                           </BCSubtitle>
                        </BarComponent>
        

                       <BarComponent title="Data">
                           <BCSubtitle>
                               <FiMap size={24} color="#000" />
                                <BCInfoDiv>
                                    <BCTextBig>Fazenda Mucugê</BCTextBig>
                                    <EventBarTextSmall>Rua de santa apolonia 9D Lisboa</EventBarTextSmall>
                                </BCInfoDiv>
                           </BCSubtitle>
                       </BarComponent>

                       <BarComponent title="Organizador">
                           <BCSubtitle>
                                <HostPhoto
                                    src={Julia}
                                    alt="Julia"
                                    width={40}
                                    height={40}>
                                </HostPhoto>
                               <BCInfoDiv>
                                    <EventBarTextNormal>@juliasilva</EventBarTextNormal>
                                    <EventBarTextNormal>Julia Silva Montano</EventBarTextNormal>
                               </BCInfoDiv>
                           </BCSubtitle>
                       </BarComponent>
                   </EventBar>
                </EventInfo>  
                
            </EventDiv>
        </Container>
    );
}

export default EventUse;
