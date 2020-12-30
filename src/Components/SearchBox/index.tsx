import {ButtonHTMLAttributes} from 'react';
import {
    Container, 
    SearchBoxForm, 
    SearchBoxInput, 
    SearchBoxButton
} from './styles';

import { FiSearch } from 'react-icons/fi';

interface SearchBoxProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({placeholder, children, ...rest}) => {
    return(
        <Container> 
            <SearchBoxForm>
                <SearchBoxInput placeholder={placeholder}> 
                    {children} 
                </SearchBoxInput>
                <SearchBoxButton {...rest}>
                    <FiSearch size={28} color="#fff"/>
                </SearchBoxButton>
            </SearchBoxForm>
        </Container>
    );
};

export default SearchBox;