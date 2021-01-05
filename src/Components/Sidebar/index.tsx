import {useCallback, useState} from 'react';

import { FiClipboard, FiHome, FiPlus, FiSettings, FiUser } from 'react-icons/fi';

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

const Sidebar: React.FC= () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

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
                         <SidebarLinkUnit isSelected={true} to="/dashboard">
                            <FiHome />
                            Home
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={false} to="/profile">
                            <FiUser />
                            Meu Perfil
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={false} to="/profile">
                            <FiSettings />
                            Configurações de conta
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={false} to="/myevents">
                            <FiClipboard />
                            Meus Eventos
                        </SidebarLinkUnit>
                        <SidebarLinkUnit isSelected={false} to="/eventeditting">
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