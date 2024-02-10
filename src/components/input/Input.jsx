import React from 'react'
import { StyledImput } from './style'

function Input(props) {
    return (
        <StyledImput value = {props.value} onChange = {props.onChange} />
    )
}

export default Input