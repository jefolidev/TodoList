import styled from "styled-components";

export const Container = styled.div`
 
    box-shadow: 1px 1px 10px rgba(201, 201, 201, .4);
    width: 850px;
    height: 500px;

    box-shadow: 1px 1px 10px rgba;
    border-radius: 40px;

    display: flex;
        align-items: center;
        justify-content: space-around;
`

export const ElementsCont = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    background-color: rgba(124, 124, 124, .1);
    box-shadow: 1px 1px 10px rgba(0,0, 0, .2);
    width: 300px;
    height: 50%; 
    border-radius: 50px;
    transform: scale(1, 1);
    transition: transform .3s, background-color .3s ;

        &:hover{
            transform: scale(1.1, 1.1);
            background-color: rgba(124, 124, 124, .0);

        }
`

export const Elements = styled.div`
    background-color: black;
    width: 150px; 
    height: 150px;
`

export const Title = styled.h2`
    color: black;
    font-size: 22px;
    margin-bottom: 2px;
    text-decoration: underline; 
   
`

export const P = styled.p`
    color: black;
    margin-left: 20px;
    margin-right: 20px;
    text-align: justify;
    text-justify: inter-word;`
    
