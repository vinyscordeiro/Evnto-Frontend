import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiCalendar, FiClipboard, FiEdit, FiSave, FiEye, FiTrash2, FiPlus } from 'react-icons/fi';

import BarComponent from '../../Components/BarComponent';
import Header from '../../Components/Header';
import TextField from '../../Components/TextField';

import Julia from '../../assets/julia.jpg';

import {
    Container,
    EventDiv,
    EventDescription,
    EventInfo,
    EventDescriptionAlignment,
    EventTitle,
    EventDays,
    EventInfoForm,
    EventBar,
    EventAlterButton,
    EventDateEditDiv,
    EventDateEditTitle,
    EventDateEditInfo,
    EventDateEditShow,
    EventDateButton,
    HostPhoto,
    HostName,
    HostDiv,
    ParticipantLink,
    DefinitionDiv,
    DefinitionTitle,
    DefinitionButton,
    DefinitionText,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const EventEditting: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const makeItSubmit= useCallback(() => {
        formRef.current?.submitForm();
    },[formRef]);

    const handleSubmit = useCallback(async(data) => {
        try{
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório')
            });
            
            await schema.validate(data, {
                abortEarly: false,
            });

        } catch(err: any) {
            const formattedError = err as Yup.ValidationError;
            const errors = getValidationErrors(formattedError);
            formRef.current?.setErrors(errors);
        }
    },[]);

    return(
        <Container>
            <Header pagename="createEvent"/>
            <EventDiv>
                <EventDescription>
                    <EventDescriptionAlignment>
                        <EventTitle>
                            Seguindo seus passos
                        </EventTitle>
                    </EventDescriptionAlignment>
                    <EventDays>
                        FALTAM 4 DIAS
                    </EventDays>
                </EventDescription>

                <EventInfo>
                   <EventInfoForm ref={formRef} onSubmit={handleSubmit} >
                        <TextField name="name" title="Nome" />
                        <TextField name="theme" title="Tema" />
                        <TextField name="place" title="Local" />
                        <TextField name="adress" title="Endereço" />
                        <TextField name="description" title="Descrição" />
                        <TextField name="mail" title="Email" />
                        <TextField name="phone" title="Telefone" type="tel"/>
                        <TextField name="inscription_limit" title="Número máximo de inscrições" type="number" />
                    </EventInfoForm>
                    <EventBar>
                        <EventAlterButton onClick={makeItSubmit}>
                            <FiSave />
                             Salvar alterações 
                        </EventAlterButton>

                            <BarComponent title="Organização">
                                <HostDiv>
                                    <HostPhoto
                                        src={Julia}
                                        alt="Julia"
                                        width={32}
                                        height={32}>
                                    </HostPhoto>
                                    <HostName>Julia Silva Montano</HostName>
                                </HostDiv>
                            </BarComponent>

                            <BarComponent title="Data">
                                <EventDateEditDiv>

                                    <EventDateEditTitle>Evento</EventDateEditTitle>
                                    <EventDateEditInfo>
                                        <FiCalendar size={24} color="#000"/>
                                        <EventDateEditShow>Indefinido</EventDateEditShow>
                                        <EventDateButton>
                                            Editar data
                                            <FiEdit size={12} />
                                        </EventDateButton>
                                    </EventDateEditInfo>

                                    <EventDateEditTitle>Inscrições</EventDateEditTitle>
                                    <EventDateEditInfo>
                                        <FiCalendar size={24} color="#000"/>
                                        <EventDateEditShow>Indefinido</EventDateEditShow>
                                        <EventDateButton>
                                            Editar data
                                            <FiEdit size={12} />
                                        </EventDateButton>
                                    </EventDateEditInfo>
                                    
                                </EventDateEditDiv>
                            </BarComponent>

                            <BarComponent title="Participantes" >
                            <ParticipantLink to="/participants">
                                <FiPlus size={12}/>
                                Mais detalhes
                            </ParticipantLink>
                            </BarComponent>

                            <BarComponent title="Definições">

                                <DefinitionDiv>
                                    <DefinitionTitle>Status</DefinitionTitle>
                                    <DefinitionButton>
                                        <FiClipboard size={24} />
                                        <DefinitionText>Confirmado</DefinitionText>
                                    </DefinitionButton>
                                </DefinitionDiv>

                                <DefinitionDiv>
                                    <DefinitionTitle>Visibilidade</DefinitionTitle>
                                    <DefinitionButton>
                                        <FiEye size={24} />
                                        <DefinitionText>Confirmado</DefinitionText>
                                    </DefinitionButton>
                                </DefinitionDiv>
                                
                                <DefinitionDiv>
                                    <DefinitionButton isRed={true}>
                                        <FiTrash2 size={24} />
                                        <DefinitionText>Excluir Evento</DefinitionText>
                                    </DefinitionButton>
                                </DefinitionDiv>
                            </BarComponent>
                        </EventBar>
                </EventInfo>  
                
            </EventDiv>
        </Container>
    );
}

export default EventEditting;
