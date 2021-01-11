import React, { useCallback } from 'react';

import {useHistory} from 'react-router-dom';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Header from '../../Components/Header'; 

import {
    Container,
    HeaderContainer,
    SignInContainer,
    SignInBox,
    Title,
    ForgotPassword,
    SignInBoxForm,
    SignUpDiv
} from './styles';

import {FiLock, FiLogIn, FiMail} from 'react-icons/fi';

const SignIn:React.FC = () => {
    const history = useHistory();

    const handleSubmit = useCallback((data) => {
        console.log(data);
    },[]);

    const navigateToDashboard = useCallback(() => {
        history.push('/dashboard');
    },[history]);

    return (
    <Container>
        <HeaderContainer>
            <Header />
        </HeaderContainer>
        <SignInContainer>
            <SignInBox>
                <SignInBoxForm onSubmit={handleSubmit}>
                    <Title>Faça seu Login </Title>
                    <Input name="mail" placeholder="Email" type="text" icon={FiMail} />
                    <Input name="password" placeholder="Senha" type="password" icon={FiLock} />
                    <ForgotPassword to="/ForgotPassword">Esqueceu sua senha ?</ForgotPassword>
                    <Button type="submit">Entrar</Button>
                </SignInBoxForm>
            </SignInBox>

            <SignUpDiv to="/SignUp">
                Novo por aqui, faça seu cadastro
                <FiLogIn size={24} />
            </SignUpDiv>
        </SignInContainer>
       
    </Container>
    );
}

export default SignIn;