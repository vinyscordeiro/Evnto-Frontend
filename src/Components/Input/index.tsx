import {InputHTMLAttributes} from 'react';
import {Container, BlueDiv, InputElement} from './styles';

import {IconBaseProps} from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon ?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name,icon: Icon,...rest}) => {
    return(
        <Container>
            <BlueDiv>
                {Icon && <Icon /> }
            </BlueDiv>
            <InputElement {...rest}/>
        </Container>
    );
};

export default Input;