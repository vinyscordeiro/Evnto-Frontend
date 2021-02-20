import {useCallback, useEffect, useState} from 'react';

import { FiClipboard, FiHome, FiPlus, FiUser } from 'react-icons/fi';

import Profile from '../../assets/profile.jpeg';

import {
    Container,
    SidebarContainer,
    ProfileImg,
    WelcomeDiv,
    WelcomeTitle,
    WelcomeName,
    SidebarLinkDiv,
    SidebarLinkUnit,
    MadeInDiv,
    CloseSiderbarIcon,
    ProfileContainer,
    ProfileOptions,
    
} from './styles';

export interface SidebarProps {
    pagename ?: "dashboard" | 'profile' | 'myEvents' | 'createEvent';
}

const Sidebar: React.FC<SidebarProps> = ({pagename}:SidebarProps) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [dashboard,setDashboard] = useState(false);
    const [profile,setProfile] = useState(false);
    const [myEvents,setMyEvents] = useState(false);
    const [createEvent,setCreateEvent] = useState(false);


    useEffect(() => {
        switch(pagename){
            case 'dashboard':
                setDashboard(true);
            break;
            case 'profile':
                setProfile(true);
            break;
            case 'myEvents':
                setMyEvents(true);
            break;
            case 'createEvent':
                setCreateEvent(true);  
            break;
        }
    },[pagename]);

    const handleSidebar = useCallback(( )=> {
        setSidebarVisible(!sidebarVisible);
    },[sidebarVisible]);

    if(sidebarVisible){
        return(
            <Container>
                <SidebarContainer>
                    <CloseSiderbarIcon onClick={handleSidebar}/>
                    <ProfileImg src={Profile} />

                    <WelcomeDiv>
                        <WelcomeTitle>Seja Bem-vindo</WelcomeTitle>
                        <WelcomeName>Vinicius Silva Cordeiro</WelcomeName>
                    </WelcomeDiv>

                    <SidebarLinkDiv>
                         <SidebarLinkUnit isSelected={dashboard} to="/dashboard">
                            <FiHome />
                            Home
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={profile} to="/profile">
                            <FiUser />
                            Meu Perfil
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={myEvents} to="/myevents">
                            <FiClipboard />
                            Meus Eventos
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={createEvent} to="/eventeditting">
                            <FiPlus />
                            Criar Evento
                        </SidebarLinkUnit>
            
                    </SidebarLinkDiv>
            
                    <MadeInDiv>
                        Desenvolvido pela Develitt
                    </MadeInDiv>
                </SidebarContainer>
            </Container>
        );
    } else {
        return(
        <ProfileContainer>
            <ProfileOptions src={Profile} onClick={handleSidebar} />
        </ProfileContainer>);
    }
    
}   

export default Sidebar;