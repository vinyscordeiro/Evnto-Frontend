import React, {createContext, useCallback, useContext, useState} from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../Components/ToastContainer'

interface ToastContextObject {
    addToast({title, subtitle, type}: Omit<ToastProps,'id'>): void;
    removeToast(id:string): void;
}

export interface ToastProps {
    id: string;
    title: string;
    subtitle?: string;
    type?: 'error' | 'sucess' | 'info';
    right?: boolean;
}

const ToastContext = createContext<ToastContextObject>({} as ToastContextObject);

export const ToastProvider: React.FC = ({children}) => {
    const [messages, setMessages] = useState<ToastProps[]>([]);
    const [inRight, setInRight] = useState(true);

    const addToast =  useCallback(({title, subtitle, type, right}:Omit<ToastProps, 'id'>) => {
        const id = uuid();
        setInRight(!!right);
    
        const toast = {
            id,
            title,
            subtitle,
            type,
        }

        setMessages([...messages,toast]);

    },[messages]);

    const removeToast =  useCallback((id: string)=>{
        const mess = messages.filter(message => message.id !== id);
        setMessages([...mess]);
    },[messages]);

    return(
        <ToastContext.Provider value={{addToast, removeToast}}>
            {children}
            {   messages &&
                <ToastContainer messages={messages} right={inRight}/>
            }
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextObject => {
    const context = useContext(ToastContext);

    if(!context){
        throw new Error('useToast must be used within an ToastProvider ')
    };

    return context;
};





