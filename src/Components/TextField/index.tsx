import {InputHTMLAttributes, useCallback, useEffect, useRef, useState} from 'react';
import { useField } from "@unform/core";

import {Container, Placeholder, InputElement} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    title: string;
}

const TextField: React.FC<InputProps> = ({name,title, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false);
    const textRef = useRef(null);
    const {registerField, defaultValue, fieldName} = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textRef.current,
            path: 'value',
        });
    }, [registerField, fieldName]);

    const handleTextFieldFocus = useCallback(()=> {
        setIsFocused(true);
    }, []);

    const handleTextFieldBlur = useCallback(()=> {
        setIsFocused(false);
    }, [])

    return(
        <Container
            isFocused={isFocused}
        >
            <Placeholder
                isFocused={isFocused}
            >{title}</Placeholder>
            <InputElement 
                ref={textRef}
                defaultValue={defaultValue}
                onFocus={handleTextFieldFocus}
                onBlur={handleTextFieldBlur}
            {...rest}/>
        </Container>
    );
};

export default TextField;