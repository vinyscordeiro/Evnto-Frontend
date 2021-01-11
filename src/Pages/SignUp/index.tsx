import { useState, useCallback} from 'react';

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

    const handleView = useCallback(() => {
        setView1(!view1);
        setView2(!view2);
    }, [view1, view2]);

    const handleSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
    <Container>
        <Header />
            <SignUpDiv>
                <SignUpCenteredDiv>
                    <SignUpForm onSubmit={handleSubmit}>
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
                                
                                <ButtonAdapted onClick={handleView} >Seguinte</ButtonAdapted>
                            </InputsDiv>

                            <InputsDiv available={view2}>
                                <Input name="adress" placeholder="Endereço" icon={FiMap} />
                                <Input name="city" placeholder="Cidade" icon={FiMapPin} />
                                <Input name="country" placeholder="País" icon={FiMapPin} />
                                <Input name="password" placeholder="Senha" icon={FiLock}/>
                                <Input name="password_confirmation" placeholder="Confirmar senha" icon={FiLock} />
        
                                <ButtonAdapted onClick={handleView} >Anterior</ButtonAdapted>
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