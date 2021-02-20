import {Container, Logo} from './styles';

import {useAuth} from '../../hooks/AuthContext';
import Sidebar, {SidebarProps} from '../Sidebar';


const Header: React.FC<SidebarProps> = ({pagename}:SidebarProps) => {
    const {user} = useAuth();

    return(
        <Container>
            <Logo href="/">EVNTO</Logo>
            {!user && <Sidebar pagename={pagename} />}
        </Container>)
};

export default Header;