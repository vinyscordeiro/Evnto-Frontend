import {InputHTMLAttributes} from 'react';
import {Container, BlueDiv, InputElement} from './styles';

import {FiMail} from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: string;
}

const Input: React.FC<InputProps> = ({name,icon,...rest}) => {
    return(
        <Container>
            <BlueDiv>
                <FiMail size={24} color="#fff"/>
            </BlueDiv>
            <InputElement {...rest}/>
        </Container>
    );
};

export default Input;