import Button  from '../../components/button/Button'
import { createGlobalStyle } from 'styled-components'
import { Container, ContainerText, ElementImg, Paragrafo, Titulo } from './style'
import { Link } from 'react-router-dom'

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

function Home(){

    return(
        <>
        <GlobalStyle/>

        <Container>
            <ContainerText>
                <Titulo>
                    Deixe seu dia a dia mais fácil!
                </Titulo>
                <Paragrafo> 
                    Se organizar não precisa ser difícil! Utilize nossa ferramente para lhe ajudar a ter um controle mais definido sobre o seu dia! Organize seu dia a dia e seu controle financeiro com a gente. Comece a usar nosso programa e descubra uma vastidão de jeitos para se organizar.
                </Paragrafo>
               
            </ContainerText>

            <ElementImg> <Button/> </ElementImg>
        </Container>
            
        </>
    )

}

export default Home