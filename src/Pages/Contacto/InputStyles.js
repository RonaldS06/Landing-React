import styled from "styled-components";

export const InputBoxStyled = styled.div`
    background-color: transparent;
    padding: 5px 0 5px 5px;
    width: 100%;
`

export const InputLabelStyled = styled.label`
    font-size: 1rem;
    display: flex;
    color: black;
`

export const InputStyled = styled.input`
    border: none;
    border-color: ${({ error }) => (error ? "red" : "green")};
   
`

export const ErrorStyled = styled.p`
    color: red;
`

