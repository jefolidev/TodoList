import styled from "styled-components"

export const SubmitButton = styled.input`
    background-color: black;
    width: 40px;
    height: 40px;
    color: white;
    margin-left: 10px;
    font-size: 15px;
    border-radius: 50%;
    border: none;
    transform: scale(1, 1);
    transition: transform .1s;

        &:hover {
            cursor: pointer;
        }

        &:active{
            transform: scale(0.96, 0.96);
            background-color: gray;
        }

`