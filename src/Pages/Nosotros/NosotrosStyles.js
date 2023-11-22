import styled from "styled-components";

export const AboutContainerStyled = styled.div`
    background-color: #FDC400;
    display: flex;
    flex-direction: column;
    padding:0 3rem;
    justify-content: center;
    align-items: center;
    color: black;
    height: 100vh;
    margin: 0;
    gap: 5rem;
    img{
        width: 332px;
        margin: 0;
    }
    @media (min-width: 768px){
        flex-direction: row;
    }
    @media (min-width: 1200px){
        padding: 0rem;
    }
`

export const InfoTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    font-size: 1.3rem;
    text-align: center;
    margin: 0;
    padding: 0;
    @media (min-width: 768px){
        text-align: start;
        max-width: 600px;
    }
    h2{
        background-color: transparent;
        font-weight: 600;
        font-size: 30px;
        margin: 0;
    }
    p{
        font-weight: 200;
    }

`