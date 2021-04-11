import React, {createContext, useCallback, useContext, useState} from 'react';
import {ConfirmationProps} from '../Components/ConfirmationModal';
import ConfirmationModal from '../Components/ConfirmationModal';
import { fromString } from 'uuidv4';


interface ModalContextObject {
    createModal({title, subtitle}: ModalObject): void;
}
interface ModalObject {
    title: string;
    subtitle: string;
}

const ModalContext = createContext<ModalContextObject>({} as ModalContextObject);

export const useModal = () => {
    const context = useContext(ModalContext);
    
    if(!context){
        throw new Error('useModal must be used within an ModalProvider')
    }
    
    return context;
}

export const ModalProvider: React.FC = ({children}) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const createModal = useCallback(({title, subtitle}: ModalObject ) => {
        setTitle(title);
        setSubtitle(subtitle);
    }, []);

    return(
        <ModalContext.Provider value={{createModal}}>
            {children}
            {   title &&
                <ConfirmationModal title={title} subtitle={subtitle} />
            }
        </ModalContext.Provider>
    );
};
