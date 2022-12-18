import styled from "styled-components";
import { colors } from "../consts/theme";



export const Close = styled.button`
    border:2px solid ${colors.black};
    transition:all .3s ease;
    border-radius:4px;
    cursor: pointer;
    padding: 6px 30px;
    margin: 0 30px 20px auto;
    display: block;
    :hover{
        background-color:${colors.black};
        color:${colors.white};
    }
`