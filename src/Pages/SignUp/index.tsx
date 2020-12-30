import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {
    Container,
    SignUpDiv,
    SignUpCenteredDiv,
    Title,
    ChangeView,
    View,
    ButtonAdapted,
    SignUpForm,
    SignInLink,
    SignInDiv
} from './styles';

import {FiLogIn} from 'react-icons/fi';

const SignUp:React.FC = () => {
    return (
    <Container>
        <Header />
            <SignUpDiv>
                <SignUpCenteredDiv>
                    <SignUpForm>
                        <Title>Cadastro</Title>

                        <ChangeView>
                            <View />
                            <View />
                        </ChangeView>

                        <Input name="name" placeholder="Nome"/>
                        <Input name="user" placeholder="Usuário"/>
                        <Input name="mail" placeholder="Email"/>
                        <Input name="birthday" placeholder="Data de nascimento"/>
                        <Input name="password" placeholder="Senha"/>
                        <Input name="password_confirmation" placeholder="Confirmar senha"/>

                        <ButtonAdapted type="submit">Seguinte</ButtonAdapted>

                    </SignUpForm>

                    <SignInLink to="/">
                        <SignInDiv>
                            <FiLogIn size={18} color="#000" />
                            Voltar para Login
                        </SignInDiv>
                    </SignInLink>

                </SignUpCenteredDiv>
            </SignUpDiv>
    </Container>
    );
}

export default SignUp;