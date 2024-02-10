import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    height: 400px;

    display: flex;
        flex-direction: row;
        justify-content: center;

    box-shadow: 1px 1px 10px rgba(201, 201, 201, 0.9);
    border-radius: 20px;
`

export const ContainerText = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;
    
    margin-left: 40px;
    margin-right: 40px;
`
export const ElementImg = styled.div`
    width: 760px;
    height: 100%;
    background-color: rgba(230, 230, 230, .1);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;

    display: flex;
        align-items: center;
        justify-content: center;
`

export const Titulo = styled.h1`
    font-size: 40px;
    margin-bottom: 5px;

`

export const Paragrafo = styled.p`
    margin-right: 10px; 
    font-size: 12px;
    text-align: justify;

`
