import { FiX } from 'react-icons/fi';
import {Container, ModalContainer, CancelButton,ConfirmationButton,Subitle,Title} from './styles';

export interface ConfirmationProps {
    title: string;
    subtitle: string;
    onClose: () => {};
    onConfirmation: () => {};
    color ?: "blue" | "red" | "green";

    // Passar também função como parâmetro para ser executada quando o Confirmation button for chamado
}

const ConfirmationModal = ({title, subtitle, color="blue", onClose, onConfirmation}: ConfirmationProps) =>  {

    return(
        <Container>
            <ModalContainer>
                <CancelButton type="button" onClick={() => onClose}>
                    <FiX />
                </CancelButton>
                <Title>{title}</Title>
                <Subitle>{subtitle}</Subitle>
                <ConfirmationButton color={color} type="button" onClick={() => onConfirmation}>Confirmar</ConfirmationButton>
            </ModalContainer>
        </Container>
    );
};

export default ConfirmationModal;