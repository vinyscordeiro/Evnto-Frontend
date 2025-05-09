import { useState, useCallback, useRef, useEffect } from 'react';
import * as Yup from 'yup';

import Input from '../../Components/Input';
import Header from '../../Components/Header';
import ConfirmationModal from '../../Components/ConfirmationModal';

import {
    Container,
    ProfileDiv,
    ProfileBox,
    AccountForm,
    AccountTitle,
    AccountSubtitle,
    ProfileForm,
    InputsDiv,
    Photo,
    Title,
    ChangeView,
    View,
    ButtonView,
    ButtonDiv,
} from './styles';

import { FiUser, FiAtSign, FiMail, FiCalendar, FiUsers, FiMapPin, FiMap, FiLock, FiTool, FiChevronsRight, FiChevronsLeft, FiSave, FiTrash2 } from 'react-icons/fi';

import profile from '../../assets/profile.jpeg';
import Button from '../../Components/Button';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

const Profile: React.FC = () => {
    const accountFormRef = useRef<FormHandles>(null);
    const profileFormRef = useRef<FormHandles>(null);
    const [modalPasswordChange, setModalPasswordChange] = useState(false);

    const [profileView, setProfileView] = useState(true);
    /*
        Profile View true é referente gestão de perfil
        Profile View false é referente a gestão de conta
    */

    const [profileView1, setProfileView1] = useState(true);
    const [profileView2, setProfileView2] = useState(false);

    const handleAccountView = useCallback((value: boolean) => {
        setProfileView(value);
        console.log(profileView);
    }, []);

    const handleProfileView = useCallback(() => {
        setProfileView1(!profileView1);
        setProfileView2(!profileView2);
    }, [profileView1, profileView2]);

    const handleProfileSubmit = useCallback(() => {
        profileFormRef.current?.submitForm();
    }, [profileFormRef]);

    const handleModalVisible = useCallback(() => {
        setModalPasswordChange(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setModalPasswordChange(false);
        console.log("invisivel")
    }, []);

    const handlePasswordChange = useCallback(() => {
        setModalPasswordChange(false);
    }, []);


    useEffect(() => {

    }, []);

    const handlePasswordChangeSubmit = useCallback(async (data: any) => {
        try {
            accountFormRef.current?.setErrors({});
            const schema = Yup.object().shape({
                old_password: Yup.string().required('Senha antiga obrigatória'),
                new_password: Yup.string().required('Senha Obrigatória').min(6, 'Minimo de seis digitos'),
                new_password_confirmation: Yup.string()
                    .oneOf(
                        [Yup.ref('password'), undefined],
                        'Senhas precisam ser iguais',
                    ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {
            const formatedErr = err as Yup.ValidationError;
            const errors = getValidationErrors(formatedErr);
            accountFormRef.current?.setErrors(errors);
        }
    }, []);

    const handleProfileChangeSubmit = useCallback(async (data: any) => {
        console.log(data);
        try {

            profileFormRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                user: Yup.string().required('Usuário obrigatório'),
                mail: Yup.string().email('Email inválido').required('Email obrigatório'),
                birthday: Yup.string().required('Data de aniversário obrigatória'),
                sex: Yup.string().required('Sexo obrigatório'),
                adress: Yup.string().required('Endereço obrigatório'),
                city: Yup.string().required('Cidade Obrigatória'),
                country: Yup.string().required('País obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {
            const formatedErr = err as Yup.ValidationError;
            const errors = getValidationErrors(formatedErr);
            profileFormRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Header pagename="profile" />
            <ProfileDiv>
                {
                    modalPasswordChange &&
                    <ConfirmationModal
                        title="Confirmar alteração de sua senha?"
                        subtitle="Confirme que faça uma senha dificil para sua conta não ser acessada por outros."
                        onClose={() => handleModalClose}
                        onConfirmation={() => handlePasswordChange}
                    />
                }
                <ProfileBox>
                    {profileView ?
                        <>
                            <ProfileForm 
                                ref={profileFormRef} 
                                onSubmit={handleProfileChangeSubmit}
                                placeholder={""}
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}>
                                <Photo src={profile} width="184px" height="184px" />
                                <Title>Perfil</Title>
                                <ChangeView>
                                    <View isSelected={profileView1} onClick={handleProfileView} />
                                    <View isSelected={profileView2} onClick={handleProfileView} />
                                </ChangeView>

                                <InputsDiv available={profileView1}>
                                    <Input name="name" placeholder="Nome" icon={FiUser} />
                                    <Input name="user" placeholder="Usuário" icon={FiAtSign} />
                                    <Input name="mail" placeholder="Email" icon={FiMail} />
                                    <Input name="birthday" placeholder="Data de nascimento" icon={FiCalendar} />
                                </InputsDiv>

                                <InputsDiv available={profileView2}>
                                    <Input name="sex" placeholder="Sexo" icon={FiUsers} />
                                    <Input name="adress" placeholder="Endereço" icon={FiMapPin} />
                                    <Input name="city" placeholder="Cidade" icon={FiMap} />
                                    <Input name="country" placeholder="Paìs" icon={FiMap} />
                                </InputsDiv>

                            </ProfileForm>

                            <ButtonDiv>
                                {profileView1 &&
                                    <>
                                        <ButtonView type="button" onClick={() => handleAccountView(false)} >
                                            <FiTool />
                                            Configuração de conta
                                        </ButtonView>
                                        <ButtonView type="button" onClick={handleProfileView}>
                                            Seguinte
                                            <FiChevronsRight />
                                        </ButtonView>
                                    </>
                                }
                                {profileView2 &&
                                    <>
                                        <ButtonView type="button" onClick={handleProfileView}>
                                            <FiChevronsLeft />
                                            Anterior
                                        </ButtonView>
                                        <ButtonView type="submit" onClick={handleProfileSubmit} >
                                            Salvar Alterações
                                            <FiSave />
                                        </ButtonView>
                                    </>
                                }
                            </ButtonDiv>
                        </>
                :
                    <>
                        <AccountForm 
                            ref={accountFormRef} 
                            onSubmit={handlePasswordChangeSubmit} 
                            placeholder={""}
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}>
                            <AccountTitle>Configurações de conta</AccountTitle>
                            <AccountSubtitle>Gestão de senha</AccountSubtitle>
                            <Input name="old_password" placeholder="Senha antiga" icon={FiLock} type="password" />
                            <Input name="new_password" placeholder="Nova Senha" icon={FiLock} type="password" />
                            <Input name="new_password_confirmation" placeholder="Confirmar nova senha" icon={FiLock} type="password" />
                            <Button type="submit">Alterar senha</Button>

                        </AccountForm>
                        <ButtonDiv>
                            <ButtonView type="button" onClick={() => handleAccountView(true)}>
                                <FiUser />
                                Meu Perfil
                            </ButtonView>
                            <ButtonView type="button" onClick={handleModalVisible} >
                                <FiTrash2 />
                                Excluir minha conta
                            </ButtonView>
                        </ButtonDiv>
                    </>
                }
                </ProfileBox>
            </ProfileDiv>
        </Container>
    );
}

export default Profile;