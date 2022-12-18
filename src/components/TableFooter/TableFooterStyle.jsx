import styled from "styled-components";
import { colors, fontWeight } from "../../consts/theme";

export const FooterContainer = styled.div`
    padding:15px;
`

export const FlexBetween = styled.div`
    display:flex;
    justify-content:space-between;
`

export const PageNo = styled.div`
    height:40px;
    width:40px;
    border:1px solid ${colors.black};
    display:flex;
    justify-content:center;
    align-items:center;
`

export const PageDot = styled.div`
height:40px;
width:40px;
/* border:1px solid ${colors.black}; */
display:flex;
justify-content:center;
align-items:end;
`
export const FlexPage = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:15px;
`

export const Selects = styled.select`
    border:2px solid${colors.black};
    height:40px;
    border-radius:4px;
    background-color:transparent;
    padding-inline:10px;
    outline:none;
    font-weight:${fontWeight.medium};
    option{
        padding:10px;
        background:${'transparent'};
    }
`
export const Paginate = styled.div`
    .pagination{
        list-style:none;
        display:flex;
        .active{
            background-color:${colors.black};
            color:${colors.white};
        }
        a{
            height:40px;
            width:40px;
            cursor: pointer;
            border:1px solid ${colors.black};
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`