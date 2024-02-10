import { ContBtn, TodoBlock, TodoClear, TodoTitle, TodoFinish } from "./style"

function TodoElmt({todo, removeTodo, finishTodo}) {
    return (
         <TodoBlock>
            <TodoTitle> {todo.name} </TodoTitle>

            <ContBtn> 
                <TodoFinish onClick = {() => finishTodo(todo.id, todo.isComplete)}> </TodoFinish>
                <TodoClear onClick = {() => removeTodo(todo.id)}/>
            </ContBtn>


         </TodoBlock>
    )
}

export default TodoElmt