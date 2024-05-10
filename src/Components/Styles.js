import styled from 'styled-components'

export const  Cores = {
    Cyan: 'hsl(179, 62%, 43%)',
    BrightYellow: 'hsl(71, 73%, 54%)',
    LightGray: 'hsl(204, 43%, 93%)',
    GrayishBlue: 'hsl(218, 22%, 67%)'
  }
  
export const Titulo = styled.h1`
    color: ${Cores.rosa};
  `
export const Div = styled.div`
    max-width: 1000px;
    height: 600px;
    background-color:${Cores.verde};
    border-radius: 5px;
    box-shadow: 0px 2px 10px -2px black;
    display: flex;
    justify-content: center;
    align-items: center;
  `