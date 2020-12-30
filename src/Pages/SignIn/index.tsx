import React, { useCallback } from 'react';

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

import {FiLogIn} from 'react-icons/fi';

const SignIn:React.FC = () => {
    const navigateToDashboard = useCallback(() => {},[]);

    return (
    <Container>
        <HeaderContainer>
            <Header />
        </HeaderContainer>
        <SignInContainer>
            <SignInBox>
                <SignInBoxForm onSubmit={navigateToDashboard}>
                    <Title>Faça seu Login </Title>
                    <Input name="mail" placeholder="Email" type="text"/>
                    <Input name="password" placeholder="Senha" type="password" />
                    <ForgotPassword to="/ForgotPassword">Esqueceu sua senha ?</ForgotPassword>
                    <Button type="submit"> Entrar</Button>
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