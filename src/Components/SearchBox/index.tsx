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
    /*const [filled, setFilled] = useState(false);

    const handleButton = useCallback(() => {
        
    },[filled,setFilled]);*/

    return(
        <Container> 
            <SearchBoxForm>
                <SearchBoxInput placeholder={placeholder}> 
                    {children} 
                </SearchBoxInput>
                <SearchBoxButton {...rest} /*isFilled={filled}*/>
                    <FiSearch size={28} />
                </SearchBoxButton>
            </SearchBoxForm>
        </Container>
    );
};

export default SearchBox;