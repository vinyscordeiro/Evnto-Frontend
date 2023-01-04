import {useCallback, useRef} from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';


import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {useToast} from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

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

    const formRef = useRef<FormHandles>(null);
    const {addToast} = useToast();


    const handleSubmit = useCallback(async (data) => {
        console.log(data);
        try{
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                password: Yup.string().required('Senha obrigatória').min(6, 'Mínimo de seis digitos'),
                password_confirmation: Yup.string()
                    .required('Confirmação de senha obrigatória')
                    .oneOf(
                    [Yup.ref('password'), undefined],
                    'Senhas precisam ser iguais',
                    ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch(err: any) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);

            addToast({
                title: 'Erro ao fazer login',
                subtitle: 'Tente novamente mais tarde',
                type: 'error',
                right: false
            });
        }
    }, [addToast]);

    return (
    <Container>
        <Header/>
        <RecoverPasswordDiv>
            <RecoverPasswordForm ref={formRef} onSubmit={handleSubmit}>
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