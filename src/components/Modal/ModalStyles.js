import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
`
export const ModalContainer = styled.div`
    max-width: 300px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;

    @media (min-width: 576px){
        max-width: initial;
        width: 500px;
    }
`


export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
`

export const ContenidoModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const BtnAceptar = styled.div`
    background-color: orange;
    padding: 8px 12px;
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.05);
    }
`