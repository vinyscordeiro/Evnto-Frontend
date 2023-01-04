import {InputHTMLAttributes , useCallback, useEffect, useRef, useState} from 'react';
import {useField} from '@unform/core';

import {Container, InputDiv, ColoredDiv, InputElement, ErrorDiv} from './styles';

import {IconBaseProps} from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon ?: React.FC<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon,...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, error, registerField} = useField(name);
    const [isErrored,setIsErrored] = useState(false);
    

    useEffect(() => {
        if(error){
            setIsErrored(true);
        }else {
            setIsErrored(false);
        }
    },[setIsErrored,error]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    },[fieldName, registerField]);

    const handleFocus = useCallback(() => {
        setIsErrored(false);
    },[setIsErrored]);

    return(
        <Container>
            <InputDiv>
                <ColoredDiv isErrored={isErrored}>
                    {Icon && <Icon /> }
                </ColoredDiv>
                <InputElement isErrored={isErrored} ref={inputRef} onFocus={handleFocus} {...rest}/>
            </InputDiv>
            {isErrored && <ErrorDiv>{error}</ErrorDiv> }
        </Container>
    );
};

export default Input;