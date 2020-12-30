import {Container, Logo} from './styles';

const Header: React.FC = ({children}) => {
    return(
        <Container>
            <Logo href="/">EVNTO</Logo>
            {children}
        </Container>)
};

export default Header;