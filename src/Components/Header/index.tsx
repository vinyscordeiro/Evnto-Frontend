import {Container, Logo} from './styles';

import Sidebar from '../Sidebar';

const Header: React.FC = () => {

    return(
        <Container>
            <Logo href="/">EVNTO</Logo>
            <Sidebar />
               
        </Container>)
};

export default Header;