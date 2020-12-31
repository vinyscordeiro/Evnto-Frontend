import {Container, Logo, User} from './styles';

import profile from '../../assets/profile.jpeg';


const Header: React.FC = ({ children}) => {
    return(
        <Container>
            <Logo href="/">EVNTO</Logo>
            {children}
        </Container>)
};

export default Header;