import Header from '../../Components/Header';
import SearchBox from '../../Components/SearchBox';

import {
    Container,
    Logo,
    SearchResponseBox,
    SearchResponseUnit,
    Info,
} from './styles';

import {FiCalendar, FiMapPin} from 'react-icons/fi';

const Dashboard:React.FC = () => {
    return (
    <Container>
        <Header />
        <Logo>EVNTO</Logo>
        <SearchBox placeholder="Digite o nome do evento que deseja participar"/>
        <SearchResponseBox>
            <SearchResponseUnit>
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} color="#4661C2"/>
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} color="#4661C2"/>
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit>
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} color="#4661C2"/>
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} color="#4661C2"/>
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
        </SearchResponseBox>
    </Container>
    );
}

export default Dashboard;