import styled from "styled-components";

export const ContainerFiltro = styled.div`
    display: flex;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
    gap: 1rem;

`
export const TitleFiltro = styled.label`
margin: 0;
`
export const BtnFiltro = styled.select`
    border: 0;
    padding: 10px;
    cursor: pointer;
    width: 150px;
    transition: all .3s ease-in-out;
    margin: 0;
    &:hover{
        background-color: black;
        color: white;
    }
`
export const OptionFiltro = styled.option`
    border: 0;
    padding: 16px;
    border-radius: 0;
`

