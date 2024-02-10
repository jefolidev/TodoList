import React, { useState } from 'react'
import { Container, Title, ContForm, ContToDo } from './style'
import { createGlobalStyle } from 'styled-components'
import { StyledButton } from '../../components/button/style'
import { useNavigate } from 'react-router-dom'
import TodoElmt from './TodoElement/TodoElmt'
import Form from './Form'

export const GlobalStyle = createGlobalStyle`
    html, body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        height: 100vh;

        display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        
    }
`

function Todo() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
        
    }
   
    const [taskB, setTaskB] = useState([

    ])

    const addTask = (name) => {
        const newTaskB = [
            ...taskB,
        {
            id: Math.floor(Math.random() * 10000),
            name,
            isCompleted: false,
        },
    ];
        setTaskB(newTaskB)
    }

    const removeTodo = (id) => {
        const newTaskB = [...taskB];
        const filteredTodos = newTaskB.filter((todo) => 
            todo.id !== id );
        
        setTaskB(filteredTodos);
    
    };
        
    const finishTodo = (id, isCompleted) => {
        console.log(isCompleted)
       const newTaskB = [...taskB]
       const index = newTaskB.findIndex(todo => todo.id === id)
       const newList = newTaskB
       newList[index].isCompleted = !isCompleted
    }

    return (
        <>
            <GlobalStyle/>
                
            <Container>
                
                <ContForm>
                   <Form addTask = {addTask} />
                  
                  
                </ContForm>

                <ContToDo>
                   
                    {taskB.map((todo) => (
                        <TodoElmt key = {todo.id} todo = {todo} removeTodo = {removeTodo} finishTodo = {finishTodo}/>
                    ))}

                </ContToDo>
                <StyledButton onClick = {goToHome}> &#129044; </StyledButton>   
            </Container>
                
        </>
    )
}

export default Todo