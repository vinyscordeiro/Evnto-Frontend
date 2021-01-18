import {useCallback} from 'react';
import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {
    Container,
    RecoverPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    RecoverPasswordForm,
    SignInLink,
    SignInDiv
} from './styles';

import {FiLock, FiLogIn} from 'react-icons/fi';

const RecoverPassword:React.FC = () => {

    const handleSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
    <Container>
        <Header/>
        <RecoverPasswordDiv>
            <RecoverPasswordForm onSubmit={handleSubmit}>
                <Title>Recuperar sua senha ?</Title>
                <Subtitle>Podes agora colocar sua nova senha!</Subtitle>

                <Input name="password" icon={FiLock} placeholder="Nova senha" type="password" />
                <Input name="password_confirmation" icon={FiLock} placeholder="Confirmar nova senha senha" type="password"/>

                <ButtonAdapted type="submit">Alterar Senha</ButtonAdapted>

                <SignInLink to="/">
                    <SignInDiv>
                        <FiLogIn size={24} color="#000" />
                        Voltar para Login
                    </SignInDiv>
                </SignInLink>

            </RecoverPasswordForm>
        </RecoverPasswordDiv>
    </Container>
    );
}

export default RecoverPassword;