import React from 'react';

import Toast from './Toast';
import {ToastProps} from '../../hooks/ToastContext';

import {Container} from './styles';

interface ToastContainerProps {
    messages: ToastProps[];
    right?: boolean;
}

/*
import {useTransition} from 'react-spring';

const messagesWithTransition = useTransition(
        messages, 
        (message) => message.id,
        {
            from: {right:'-120%', opacity: 0},
            enter: {right:'-120%', opacity: 1},
            leave: {right:'-120%', opacity: 0},
        }
    );


    {messagesWithTransition.map(({item, props}) => {
                return(
                    <Toast id={item.id} title={item.title} subtitle={item.subtitle} type={item.type} style={props}/>
                );
            })}

*/
const ToastContainer:React.FC<ToastContainerProps> = ({messages, right}) => {

    return(
        <Container right={right}>
            {messages.map((item) => {
                return(
                    <Toast id={item.id} title={item.title} subtitle={item.subtitle} type={item.type}/>
                );
            })}
        </Container>
    )
}

export default ToastContainer;