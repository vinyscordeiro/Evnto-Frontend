import styled from 'styled-components';

export const Container = styled.button`
    color: #fff;
    cursor: pointer;

    background-color: #4661C2;
    width: 100%;
    line-height: 40px;
    font-family: 'Reem Kufi', sans-serif;
    font-size: 16px;
    font-weight: 400;
    
    margin: 0 0 2em;
    max-width: 142px; 
    border: 1px solid ;
    box-shadow: inset 0 0 20px rgba(70, 97, 194, 0.3);
    outline: 1px solid ;
    outline-color: rgba(70, 97, 194, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
        box-shadow: inset 0 0 20px rgba(70, 97, 194, .5), 0 0 20px rgba(70, 97, 194, .2);
        outline-color: rgba(70, 97, 194, 0);
        outline-offset: 15px;
    }
  
`;
