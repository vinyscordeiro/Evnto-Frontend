import React, {useEffect} from 'react';

import {FiAlertCircle, FiInfo, FiCheckCircle, FiX} from 'react-icons/fi';

import {useToast} from '../../../hooks/ToastContext';
import {Container, ToastInfo, ToastTitle, ToastSubtitle} from './styles';

interface ToastProps{
    id: string;
    title: string;
    subtitle?: string;
    type?: 'sucess' | 'error' | 'info';
    style: object;
}

const icons = {
    info: <FiInfo />,
    error: <FiAlertCircle />,
    sucess: <FiCheckCircle />,
}

export const Toast:React.FC<ToastProps> = ({id, title, subtitle, type, style}:ToastProps) => {
    const {removeToast} = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(id);
        },5000);
        return () => {
            clearTimeout(timer);
            //Toda vez que retorno uma função ela é automaticamente executado se o componente deixar de existir.
        }
    },[removeToast, id]);

    return(
        <Container style={style} key={id} type={type}>
            <ToastInfo type={type}>
                <ToastTitle>
                    { icons[type ||'info'] }
                    { title }
                </ToastTitle>

                {subtitle && 
                    <ToastSubtitle>
                        { subtitle  }
                    </ToastSubtitle>
                }
                <button type="button" onClick={() => removeToast(id)}>
                    <FiX size={14} />
                </button>
            </ToastInfo>
        </Container>
    );
}

export default Toast;