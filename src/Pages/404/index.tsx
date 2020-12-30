import Header from '../../Components/Header';

import {
    Container,
    Main,
    Warning,
    Subtitle
} from './styles';

const Login:React.FC = () => {
    return (
    <Container>
        <Header />
        <Main>
            <Warning>Erro 404</Warning>
            <Subtitle> Parece que não há nenhuma página por cá </Subtitle>
        </Main>
    </Container>
    );
}

export default Login;