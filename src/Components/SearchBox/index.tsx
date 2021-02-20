import {ButtonHTMLAttributes, useCallback, useEffect, useRef, useState} from 'react';
import {useField} from '@unform/core';

import { FiSearch } from 'react-icons/fi';

import {
    Container, 
    SearchBoxDiv, 
    SearchBoxInput, 
    SearchBoxButton
} from './styles';

interface SearchBoxProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    placeholder?: string;
    name: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({placeholder, name, ...rest}) => {
    const searchBoxRef = useRef<HTMLInputElement>(null);
    const [filled, setFilled] = useState(false)
    const {fieldName, registerField} = useField(name);

    useEffect( () => {

        registerField({
            name: fieldName,
            ref: searchBoxRef.current,
            path: 'value'
        });


    }, [fieldName, registerField]);

    const handleWritting = useCallback(() => {
        if(searchBoxRef.current?.value){
            console.log('true');
            setFilled(true);
        } else {
            setFilled(false);
        }
    }, []);


    /*;

    const handleButton = useCallback(() => {
        
    },[filled,setFilled]);*/

    return(
        <Container> 
            <SearchBoxDiv>
                <SearchBoxInput ref={searchBoxRef} placeholder={placeholder} onChange={handleWritting}/> 
                <SearchBoxButton type="submit" isFilled={filled} {...rest} disabled={!filled}>
                    <FiSearch size={28} />
                </SearchBoxButton>
            </SearchBoxDiv>
        </Container>
    );
};

export default SearchBox;