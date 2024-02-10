import styled from "styled-components";

export const Container = styled.div`

    background-color: rgba(240, 240, 240, 1);;
    width: 400px;
    height: 650px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 30px;
    gap: 20px;

`
export const ContToDo = styled.div`    
    display: flex;
        flex-direction: column;
        align-items: start;
        gap: 12px;

    border-radius: 50px;

`
export const ContForm = styled.div`
    width: 500px;
    height: 100px;
    
    display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    margin-top: 10px;

`
export const FormStyled = styled.form`
    background-color: rgba(255, 255, 255, .8);;
    width: 300px;
    height: 80px;
    display: flex;
        align-items: center;
        justify-content: center;
    box-shadow: 1px 1px 7px rgba(201, 201, 201, 0.7);

    border-radius: 30px;

    margin-right: 10px;
`

export const Title = styled.h1`
    color: purple;

    font-size: 30px;
    margin-bottom: 0px;

        width: 100%;
        height: 90px;
    
    color: white;

`