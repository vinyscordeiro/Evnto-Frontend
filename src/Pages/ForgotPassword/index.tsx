import {useCallback, useRef} from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import {FiMail, FiLogIn} from 'react-icons/fi';

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
import getValidationErrors from '../../utils/getValidationErrors';

const ForgotPassword:React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data) => {
        console.log(data);
        try{
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                mail: Yup.string().required('Email obrigatório').email('Email inválido'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
    <Container>
        <Header/>
        <ForgotPasswordDiv>
            <ForgotPasswordForm ref={formRef} onSubmit={handleSubmit}>
                <Title>Esqueceu sua senha ?</Title>
                <Subtitle>Não é problema, podemos recuperar com seu email</Subtitle>

                <Input name="mail" icon={FiMail} placeholder="Email"/>

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