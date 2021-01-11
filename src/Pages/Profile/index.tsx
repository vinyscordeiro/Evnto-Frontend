import {useState, useCallback} from 'react';

import Input from '../../Components/Input';
import Header from '../../Components/Header';

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

import {FiAtSign, FiCalendar, FiChevronsLeft, FiChevronsRight, FiLock, FiMail, FiMap, FiMapPin, FiSave, FiTool, FiTrash2, FiUser, FiUsers} from 'react-icons/fi';

import profile from '../../assets/profile.jpeg';
import Button from '../../Components/Button';

const Profile:React.FC = () => {
    const [profileView1, setProfileView1] = useState(true);
    const [profileView2, setProfileView2] = useState(false);
    const [accountView, setAccountView] = useState(true);

    const handleProfileView = useCallback(() => {
        setProfileView1(!profileView1);
        setProfileView2(!profileView2);
    }, [profileView1, profileView2]);

    const handleAccountView = useCallback(() => {
        setAccountView(!accountView);
    }, [accountView]);

    const handlePasswordChangeSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    const handleProfileChangeSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
    <Container>
        <Header />
            <ProfileDiv>
                <ProfileBox>
                    {accountView ? 
                        <>
                            <AccountForm onSubmit={handlePasswordChangeSubmit} >
                                <AccountTitle>Configurações de conta</AccountTitle>
                                <AccountSubtitle>Configurações de conta</AccountSubtitle>
                                <Input name="old_password" placeholder="Senha antiga" icon={FiLock} />
                                <Input name="new_password" placeholder="Nova Senha" icon={FiLock} />
                                <Input name="new_password_confirmation" placeholder="Confirmar nova senha" icon={FiLock} />
                                <Button type="submit">Alterar senha</Button>
                            </AccountForm>
                            <ButtonDiv>
                                <ButtonView type="button" onClick={handleAccountView}>
                                    <FiUser />
                                    Meu Perfil
                                </ButtonView>
                                <ButtonView>
                                    <FiTrash2 />
                                    Excluir minha conta
                                </ButtonView>
                            </ButtonDiv>
                        </>
                        :
                        <>
                            <ProfileForm onSubmit={handleProfileChangeSubmit}>
                                <Photo src={profile} width="184px" height="184px"/>
                                <Title>Perfil</Title>
                                    <ChangeView>
                                        <View isSelected={profileView1} onClick={handleProfileView} />
                                        <View isSelected={profileView2} onClick={handleProfileView} />
                                    </ChangeView>
                                
                                    <InputsDiv available={profileView1}>
                                        <Input name="name" placeholder="Nome" icon={FiUser} />
                                        <Input name="user" placeholder="Usuário" icon={FiAtSign}/>
                                        <Input name="mail" placeholder="Email" icon={FiMail}/>
                                        <Input name="birthday" placeholder="Data de nascimento" icon={FiCalendar} />
                                    </InputsDiv>

                                    <InputsDiv available={profileView2}>
                                        <Input name="sex" placeholder="Sexo" icon={FiUsers} />
                                        <Input name="adress" placeholder="Endereço" icon={FiMapPin} />
                                        <Input name="city" placeholder="Cidade" icon={FiMap}/>
                                        <Input name="country" placeholder="Paìs" icon={FiMap}/>
                                    </InputsDiv>
                        
                            </ProfileForm>

                            <ButtonDiv>
                                { profileView1 && 
                                <>
                                    <ButtonView>
                                        <FiTool type="button" onClick={handleAccountView} />
                                        Configuração de conta
                                    </ButtonView>
                                    <ButtonView type="button" onClick={handleProfileView}>
                                        Seguinte
                                        <FiChevronsRight />
                                    </ButtonView>
                                </>
                                }
                                { profileView2 && 
                                <>
                                    <ButtonView type="button" onClick={handleProfileView}>
                                        <FiChevronsLeft />
                                        Anterior
                                    </ButtonView>
                                    <ButtonView type="submit">
                                        Salvar Alterações
                                        <FiSave />
                                    </ButtonView>
                                </>
                                }
                            </ButtonDiv>
                        </>
                    }
                </ProfileBox>
            </ProfileDiv>
    </Container>
    );
}

export default Profile;