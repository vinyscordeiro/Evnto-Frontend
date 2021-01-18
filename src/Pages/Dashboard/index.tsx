import Header from '../../Components/Header';
import SearchBox from '../../Components/SearchBox';

import {
    Container,
    Logo,
    SearchForm,
    SearchResponseBox,
    SearchResponseUnit,
    Info,
} from './styles';

import {FiCalendar, FiMapPin} from 'react-icons/fi';
import { useCallback } from 'react';

const Dashboard:React.FC = () => {

    const handleSubmit = useCallback((data) => {
        console.log(data);
    },[]);

    return (
    <Container >
        <Header />
        <Logo>EVNTO</Logo>
        
        <SearchForm onSubmit={handleSubmit}>
            <SearchBox name="search" placeholder="Digite o nome do evento que deseja participar" />
        </SearchForm>

        <SearchResponseBox>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>

            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            <SearchResponseUnit to="/eventuse">
                <Info>Seguindo seus passos</Info>

                <Info>
                    <FiCalendar size={24} />
                    24/12/2020 a 27/12/2020
                </Info>
                
                <Info>
                    <FiMapPin size={24} />
                    Fazenda Mucugê
                </Info>
            </SearchResponseUnit>
            
          
        </SearchResponseBox>
    </Container>
    );
}

export default Dashboard;