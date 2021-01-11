import {InputHTMLAttributes, useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import {Container, BlueDiv, InputElement} from './styles';

import {IconBaseProps} from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon ?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon,...rest}) => {
    const inputRef = useRef(null);
    const { fieldName, registerField} = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    },[fieldName, registerField]);

    return(
        <Container>
            <BlueDiv>
                {Icon && <Icon /> }
            </BlueDiv>
            <InputElement ref={inputRef} {...rest}/>
        </Container>
    );
};

export default Input;