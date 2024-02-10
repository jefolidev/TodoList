import React from 'react'
import { StyledButton } from './style'
import { useNavigate } from 'react-router-dom'

function Button() {
    const navigate = useNavigate()
    const goToChoose = () => {
        navigate('/escolha')
        
    }
    return (
        <StyledButton onClick = {goToChoose}>   &#10148; </StyledButton> 
    )
}

export default Button