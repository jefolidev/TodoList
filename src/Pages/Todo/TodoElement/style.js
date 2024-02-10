import styled from "styled-components";

export const TodoBlock = styled.div`
     background-color: rgba(255, 255, 255, .8);
        width: 300px;
        height: 60px;

     border-radius: 10px;   
     box-shadow: 1px 1px 7px rgba(201, 201, 201, 0.7);

     display: flex;
        align-items: center;
        justify-content: space-between;
    
`

export const TodoTitle = styled.p`
    color: black;   
        font-size: 15px;
        font-weight: 700;

    margin-left: 10px;
    margin-right: 10px;

`
export const ContBtn = styled.div`

     display: flex;
        align-items: center;
        justify-content: end;
        gap: 2px;

    margin-right: 10px;
    
`

export const TodoFinish = styled.button`
    background-color: #35ff2e;
        width: 20px;
        height: 20px;
        border: none;

    border-radius: 50%;
    cursor: pointer;

    &:active{
            transform: scale(0.96, 0.96);
            background-color: rgba(240, 240, 240, .8);
        }

`


export const TodoClear = styled.button`
    background-color: #ff312e;
        width: 20px;
        height: 20px;
        border: none;


    border-radius: 50%;
    cursor:pointer;

    &:active{
            transform: scale(0.96, 0.96);
            background-color: rgba(240, 240, 240, .8);
        }
`
