import React, {useCallback, useRef} from 'react';

import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {FormHandles} from '@unform/core';
import { Form } from '@unform/web';
import styled from 'styled-components';

import getValidationErrors  from '../../utils/getValidationErrors';
import {useAuth} from '../../hooks/AuthContext';
import {useToast} from '../../hooks/ToastContext';

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

interface SignInObject {
    mail: string;
    password: string;
}

const SignIn:React.FC = () => {
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null);
    const {signIn} = useAuth();
    const {addToast} = useToast();

    const handleSubmit = useCallback(async (data: SignInObject) => {
        console.log(data);
        try{
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                mail: Yup.string().email('Digite um email valido').required('Email Obrigatório'),
                password: Yup.string().min(6, 'Mínimo de seis digitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                mail: data.mail, 
                password: data.password
            });

            navigate('/dashboard');

        
        } catch(err: any){
            console.log(err);
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
            
            addToast({
                title: 'Erro ao fazer login',
                subtitle: 'Verifique sua senha e seu email',
                type: 'error',
                right: true
            });
        }
    },[navigate, signIn, addToast]);

    return (
    <Container>
        <HeaderContainer>
            <Header />
        </HeaderContainer>
        <SignInContainer>
            <SignInBox>
                <SignInBoxForm
                  ref={formRef}
                  onSubmit={handleSubmit}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
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