import {useCallback} from 'react';

import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {
    Container,
    ForgotPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    ForgotPasswordForm,
    SignInLink,
    SignInDiv
} from './styles';

import {FiLogIn} from 'react-icons/fi';

const ForgotPassword:React.FC = () => {
    const handleSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
    <Container>
        <Header/>
        <ForgotPasswordDiv>
            <ForgotPasswordForm onSubmit={handleSubmit}>
                <Title>Esqueceu sua senha ?</Title>
                <Subtitle>Não é problema, podemos recuperar com seu email</Subtitle>

                <Input name="mail" placeholder="Email"/>

                <ButtonAdapted type="submit">Recuperar Senha</ButtonAdapted>
                
                <SignInLink href="/">
                    <SignInDiv>
                        <FiLogIn size={24} color="#000" />
                        Voltar para Login
                    </SignInDiv>
                </SignInLink>


            </ForgotPasswordForm>
        </ForgotPasswordDiv>
    </Container>
    );
}

export default ForgotPassword;