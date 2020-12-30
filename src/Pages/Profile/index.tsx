import Input from '../../Components/Input';
import Header from '../../Components/Header';

import {
    Container,
    ProfileDiv,
    ProfileBox,
    ProfileForm,
    Photo,
    Title,
    ChangeView,
    View,
    ButtonView,
    ButtonDiv,
} from './styles';

import {FiTool} from 'react-icons/fi';

import profile from '../../assets/profile.jpeg';

const Profile:React.FC = () => {
    return (
    <Container>
        <Header />
            <ProfileDiv>
                <ProfileBox>
                    <ProfileForm>
                        <Photo src={profile} width="184px" height="184px"/>
                        <Title>Perfil</Title>
                            <ChangeView>
                                <View />
                                <View />
                            </ChangeView>

                            <Input name="name" placeholder="Nome"/>
                            <Input name="user" placeholder="Usuário"/>
                            <Input name="mail" placeholder="Email"/>
                            <Input name="birthday" placeholder="Data de nascimento"/>

                    </ProfileForm>
                    <ButtonDiv>
                        <ButtonView>
                            <FiTool size={24} color="#FFF" />
                            Configuração de senha
                        </ButtonView>
                        <ButtonView>Seguinte</ButtonView>
                    </ButtonDiv>
                </ProfileBox>
            </ProfileDiv>
    </Container>
    );
}

export default Profile;