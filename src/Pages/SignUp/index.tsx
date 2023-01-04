import { useState, useCallback, useRef} from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import {useToast} from '../../hooks/ToastContext';

import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {
    Container,
    SignUpDiv,
    SignUpCenteredDiv,
    Title,
    ChangeView,
    View,
    InputsDiv,
    ButtonAdapted,
    SignUpForm,
    SignInLink,
    SignInDiv
} from './styles';

import {
    FiLogIn,
    FiUser,
    FiMail,
    FiLock,
    FiAtSign,
    FiCalendar,
    FiUsers,
    FiMap,
    FiMapPin,

} from 'react-icons/fi';

const SignUp:React.FC = () => {
    const [view1, setView1] = useState(true);
    const [view2, setView2] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const {addToast} = useToast();

    const handleView = useCallback(() => {
        setView1(!view1);
        setView2(!view2);
    }, [view1, view2]);

    const handleSubmit = useCallback(async (data) => {
        console.log(data);
        try{

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                user: Yup.string().required('Usuário obrigatório'),
                mail: Yup.string().email('Email inválido').required('Email obrigatório'),
                birthday: Yup.string().required('Data de aniversário obrigatória'),
                sex: Yup.string().required('Sexo obrigatório'),
                adress: Yup.string().required('Endereço obrigatório'),
                city: Yup.string().required('Cidade Obrigatória'),
                country: Yup.string().required('País obrigatório'),
                password: Yup.string().required('Senha obrigatória').min(6, 'Mínimo de seis letras'),
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

            addToast({
                title: 'Conta criada com sucesso',
                subtitle: 'Podes agora fazer login na página inicial.',
                type: 'sucess',
                right: false
            });

        }catch(err: any) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);

            if (err instanceof Yup.ValidationError) {
               return;
            } else {
                addToast({
                    title: 'Erro ao criar sua conta',
                    subtitle: 'Tente novamente mais tarde',
                    type: 'error',
                    right: false,
                });
            }
        }
        
    }, [addToast]);

    return (
    <Container>
        <Header />
            <SignUpDiv>
                <SignUpCenteredDiv>
                    <SignUpForm ref={formRef} onSubmit={handleSubmit}>
                        <Title>Cadastro</Title>

                        <ChangeView>
                            <View isSelected={view1} onClick={handleView} />
                            <View isSelected={view2} onClick={handleView} />
                        </ChangeView>
                            <InputsDiv available={view1}>
                                <Input name="name" placeholder="Nome" icon={FiUser} />
                                <Input name="user" placeholder="Usuário" icon={FiAtSign} />
                                <Input name="mail" placeholder="Email" icon={FiMail} />
                                <Input name="birthday" placeholder="Data de nascimento" icon={FiCalendar} />
                                <Input name="sex" placeholder="Sexo" icon={FiUsers} />
                                
                                <ButtonAdapted type="button" onClick={handleView} >Seguinte</ButtonAdapted>
                            </InputsDiv>

                            <InputsDiv available={view2}>
                                <Input name="adress" placeholder="Endereço" icon={FiMap} />
                                <Input name="city" placeholder="Cidade" icon={FiMapPin} />
                                <Input name="country" placeholder="País" icon={FiMapPin} />
                                <Input name="password" placeholder="Senha" icon={FiLock} type="password"/>
                                <Input name="password_confirmation" placeholder="Confirmar senha" icon={FiLock} type="password"/>
        
                                <ButtonAdapted type="button" onClick={handleView} >Anterior</ButtonAdapted>
                                <ButtonAdapted type="submit" onClick={handleSubmit} >Finalizar</ButtonAdapted>
                            </InputsDiv>
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