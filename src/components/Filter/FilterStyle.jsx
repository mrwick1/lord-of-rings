import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../../consts/theme";


export const FilterContainer =styled.div`
    border-bottom:2px solid ${colors.black};
`
export const  GridR1 = styled.div`
    display:grid;
    padding:25px 15px;
    grid-template-columns:60% 40%;
    @media (max-width:680px) {
        grid-template-columns:1fr;
        padding-bottom:0;
    }
`

export const Search = styled.input`
    border:2px solid${colors.black};
    height:40px;
    border-radius:4px;
    background-color:transparent;
    padding-inline:10px;
    outline:none;
    width:100%;
    font-size:${fontSize.md};
`
export const Label = styled.label`
    font-size:${fontSize.lg};
    font-weight:${fontWeight.medium};
    flex-shrink:0;
    `
export const FlexIn = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

export const FlexIn2 = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    @media (max-width:620px) {
        flex-direction:column;
    }
`
export const Relative = styled.div`
    position: relative;
    width:100%;
    max-width:545px;
`
export const AbsoluteSVG = styled.div`
    position: absolute;
    right: 5px;
    top: 7px;
    pointer-events:none;
    svg{
        height:25px;
        width:25px;
    }
`

export const Select = styled.select`
    border:2px solid${colors.black};
    height:40px;
    border-radius:4px;
    background-color:transparent;
    padding-inline:10px;
    outline:none;
    width:100%;
    font-weight:${fontWeight.medium};
    option{
        padding:10px;
        background:${'transparent'};
    }
`

export const GridR2 = styled.div`
    display:grid;
    padding:25px 15px;
    grid-template-columns:70% 30%;
    @media (max-width:740px) {
        grid-template-columns:1fr;
        padding-top:0;
        
    }
`

export const RaceSection = styled.div`
    width:60%;
    >div>div{
        width:100%
    }
    .searchWrapper{
        min-height:40px;
        border:2px solid${colors.black};
        border-radius:4px;
        background-color:transparent;
    }
    @media (max-width:620px) {
        width:100%
    }
`
export const GenderSection = styled.div`
    width:40%;
    padding-left:10px;
    @media (max-width:620px) {
        width:100%
    }
`
export const SortBy = styled.div`
    padding-left:14px;
    @media (max-width:680px) {
        padding:15px 0;
    }
`

export const SubCenter = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    @media (max-width:740px) {
        padding-top:20px;
        justify-content:center;
    }
` 
export const Submit = styled.button`
    border:none;
    padding:8px 50px;
    border-radius:8px;
    background-color:${colors.black};
    color:${colors.white};
    cursor: pointer;
`