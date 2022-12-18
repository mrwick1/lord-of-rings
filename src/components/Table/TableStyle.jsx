import styled from "styled-components";
import { colors, fontSize } from "../../consts/theme";



export const TableMain = styled.table`
    border:none;
    width:100%;
    text-align:center;
    border-bottom:2px solid ${colors.black};
    
`
export const Td = styled.td`
    margin:5px 0;
`

export const Th = styled.th`
    font-size:${fontSize.md};
`
export const Tr = styled.tr`
    height:40px;
`