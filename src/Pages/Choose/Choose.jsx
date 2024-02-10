import React from 'react'
import { GlobalStyle } from '../Home/home'
import { Container, Elements, ElementsCont, P, Title } from './style'
import { StyledButton } from '../../components/button/style'
import { useNavigate } from 'react-router-dom'

function Choose() {
    const navigate = useNavigate()
    const goToTodo = () => {
        navigate('/to_do_list')
        
    }

    const goToCash = () => {
        navigate('/financeiro')
        
    } 

    const goToHome = () => {
        navigate('/')
        
    }
   
    return (
        <>
            <GlobalStyle/>
                <Container>
                    <StyledButton onClick = {goToHome}> &#129044; </StyledButton>


                <ElementsCont> 
                    <Title> Lista de Afazeres </Title>
                    {/* <Elements/> */}
                    <P> Controle o seu dia a dia aqui. Com nossa lista, você pode criar objetivos para se fazer e não esquecer aquelas coisas importantes.</P>
                    <StyledButton onClick = {goToTodo}> &#10148; </StyledButton>
                </ElementsCont>
                
                <ElementsCont>
                    <Title> Controle de Gastos </Title>
                    {/* <Elements/> */}
                    <P> Controle os seus gastos diários aqui. Com esse método, você pode ter consciencia do que pode gastar, para que sobre dinheiro para aquele hamburguer no fim de semana!</P>
                    <StyledButton onClick = {goToCash}> &#10148; </StyledButton>
                </ElementsCont>
                
                    
                </Container>
        </>

    )
}

export default Choose