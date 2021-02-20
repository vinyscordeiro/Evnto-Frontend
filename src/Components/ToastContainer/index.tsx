import React from 'react';
import {useTransition} from 'react-spring';

import Toast from './Toast';
import {ToastProps} from '../../hooks/ToastContext'

import {Container} from './styles';

interface ToastContainerProps {
    messages: ToastProps[];
    right?: boolean;
}

const ToastContainer:React.FC<ToastContainerProps> = ({messages, right}) => {
    const messagesWithTransition = useTransition(
        messages, 
        (message) => message.id,
        {
            from: {right:'-120%', opacity: 0},
            enter: {right:'-120%', opacity: 1},
            leave: {right:'-120%', opacity: 0},
        }
    );

    return(
        <Container right={right}>
            {messagesWithTransition.map(({item, props}) => {
                return(
                    <Toast id={item.id} title={item.title} subtitle={item.subtitle} type={item.type} style={props}/>
                );
            })}
        </Container>
    )
}

export default ToastContainer;