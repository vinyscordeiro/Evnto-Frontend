import { FiClipboard, FiPlus, FiSettings, FiUser } from 'react-icons/fi';

import Profile from '../../assets/profile.jpeg';

import {
    Container,
    ProfileImg,
    WelcomeDiv,
    WelcomeTitle,
    WelcomeName,
    SidebarLinkDiv,
    SidebarLinkUnit,
    MadeInDiv,
} from './styles';

const Sidebar: React.FC = () => {
    return(
        <Container>
            <ProfileImg src={Profile} />
            <WelcomeDiv>
                <WelcomeTitle>Seja Bem-vindo</WelcomeTitle>
                <WelcomeName>Vinicius Silva Cordeiro</WelcomeName>
            </WelcomeDiv>
            <SidebarLinkDiv>
                <SidebarLinkUnit isSelected={true} to="/profile">
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
        </Container>
    );
}

export default Sidebar;