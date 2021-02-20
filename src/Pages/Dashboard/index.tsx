import React, {useState, useCallback} from 'react';

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

interface EventProps {
    id: number;
    name: string;
    date: string;
    location: string;
}

const Dashboard:React.FC = () => {
    const [events,setEvents] = useState<EventProps[]>([]);

    const handleSubmit = useCallback(() => {

        setEvents([
            {   
                id: 1,
                name:"Seguindo seus passos",
                date: "24/12/2020 a 27/12/2020",
                location: "Fazenda Mucugê"
            },
            {
                id: 2,
                name:"Retiro",
                date: "24/12/2020 a 27/12/2020",
                location: "Fazenda Emaus"
            },
            {
                id: 3,
                name:"Festival de inverno",
                date: "24/12/2021 a 27/12/2021",
                location: "Parque de exposição"
            },
            {
                id: 4,
                name:"Festival de inverno",
                date: "24/12/2021 a 27/12/2021",
                location: "Parque de exposição"
            },
            {
                id: 5,
                name:"Festival de inverno",
                date: "24/12/2021 a 27/12/2021",
                location: "Parque de exposição"
            },
            {
                id: 6,
                name:"Festival de inverno",
                date: "24/12/2021 a 27/12/2021",
                location: "Parque de exposição"
            },
            {
                id: 7,
                name:"Festival de invernoaaaaaaaaaaaaaaaaaaaaa aldkfnvsjdkf n dfvdjfsgrjkf",
                date: "24/12/2021 a 27/12/2021",
                location: "Parque de exposição"
            },
        ]);

        console.log(events);
    },[events]);

    return (
    <Container >
        <Header pagename="dashboard" />
        <Logo>EVNTO</Logo>
        
        <SearchForm onSubmit={handleSubmit}>
            <SearchBox name="search" placeholder="Digite o nome do evento que deseja participar" />
        </SearchForm>

        <SearchResponseBox>
            { events.map((e) => {
                return(
                    <SearchResponseUnit to="/eventuse" key={e.id}>
                        <Info>{e.name}</Info>

                        <Info>
                            <FiCalendar size={24} />
                        {e.date}
                        </Info>
                    
                        <Info>
                            <FiMapPin size={24} />
                            {e.location}
                        </Info>
                    </SearchResponseUnit>
                )  
            })}
        
          
        </SearchResponseBox>
    </Container>
    );
}

export default Dashboard;