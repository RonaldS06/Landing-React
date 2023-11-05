import styled from "styled-components";

export const AboutContainerStyled = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 4rem;
    background-image: url(backgroundAbout.png);
    background-repeat: no-repeat;
    background-size: cover;
    img{
        width: 332px;
        margin: 0;
    }
    @media (min-width: 768px){
        flex-direction: row;
    }
    @media (min-width: 1200px){
        padding: 2rem 12rem;
    }
`

export const InfoTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin: 0;
    text-align: center;
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