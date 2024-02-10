import { FormStyled } from "./style"
import { useState } from "react"
import Input from "../../components/input/Input"
import { SubmitButton } from "../../components/input/submit/style"

function Form ({ addTask }) {

    const [task, setTask] = useState()

    const subForm = (e) =>{
        e.preventDefault(); //previne do arquivo ser enviado só em clicar no submit 

        if(!task) return;

        addTask(task)
        setTask("")
     
    }  
    return(

        <FormStyled onSubmit = {subForm} >
            <Input value = {task} onChange = {(e) => setTask(e.target.value)}/>
            <SubmitButton type = "submit" value = "+"/>
        </FormStyled>
    )


}

export default Form