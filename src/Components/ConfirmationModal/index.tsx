import { useCallback, useState } from 'react';
import {Container,CancelButton,ConfirmationButton,Subitle,Title} from './styles';

export interface ConfirmationProps {
    title: string;
    subtitle: string;
}

const ConfirmationModal = ({title, subtitle}: ConfirmationProps) =>  {
    const [modalVisible, setModalVisible] = useState(true);

    const handleModalVisible = useCallback(() => {
        setModalVisible(false);
    }, []);

    return(
        <Container>
            <CancelButton />
            <Title>{title}</Title>
            <Subitle>{subtitle}</Subitle>
            <ConfirmationButton />
        </Container>
    );
};

export default ConfirmationModal;