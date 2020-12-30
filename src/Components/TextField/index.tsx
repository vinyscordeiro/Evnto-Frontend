import {InputHTMLAttributes, useCallback, useState} from 'react';
import {Container, Placeholder, InputElement} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    title: string;
}

const TextField: React.FC<InputProps> = ({name,title, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false);

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
                onFocus={handleTextFieldFocus}
                onBlur={handleTextFieldBlur}
            {...rest}/>
        </Container>
    );
};

export default TextField;