import styled from "styled-components"

export const colors = {
    blueGreen : '#AEE5D8',
    black: '#07020D',
    amazonGreen : '#4A7C59',
    fawnOrange: '#E7A977',
    blue:'#008DD5',
    gray:'#B9D2B1',
    white:'#fff',
}


export const fontSize = {
    sm:'12px',
    base:'16px',
    md:'18px',
    lg:'23px',
    xl:'30px'
} 

export const fontWeight = {
    normal:400,
    medium:500,
    semi:600,
    bold:700
}

export const Container = styled.div`
    max-width:1200px;
    padding:0 15px;
    margin:auto;
`

export const H1 = styled.h1`
    font-size:${fontSize.xl};
    text-align:center;
    font-weight:${fontWeight.medium};
    color:${colors.black};
`

export const H4 = styled.h4`
    font-size:${fontSize.base};
    text-align:center;
    font-weight:${fontWeight.normal};
    color:${colors.black};
`

export const H3 = styled.h3`
font-size:${fontSize.md};
text-align:center;
font-weight:${fontWeight.medium};
color:${colors.black};
`

export const Main = styled.div`
    /* background-color:${colors.blueGreen}; */
`