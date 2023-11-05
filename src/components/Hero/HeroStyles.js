import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding: 1rem 8vw;
    overflow: hidden;

    & img{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        @media (min-width: 992px){
            width: initial;
        }
    }

    @media (min-width: 992px) {
        flex-direction: row;
        align-items: center;
        padding: 0;
    }
    
`

export const HeroInfoStyled = styled(HeroContainerStyled)`
    text-align: center;
    font-size: 30px;
    h1{
        font-weight: bold;
        color: black;
        line-height: 35px;
    } & h1>span{
        color: #AB1E22;
    }
    p{
        font-size:18px;
        font-weight: 400;
    }
    @media (min-width: 992px) {
        padding: 3rem 1rem;
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
        width: 80%;

        h1{
            font-size: 3.3rem;
            line-height: 55px;
            margin: 0;

            @media (min-width: 1200px) {
                font-size:4.3rem;
                line-height: 65px;
            }
        }
    }
    
`
export const HeroImgStyled = styled.div`

    img{
        margin-left: -6vw;
        margin-top: -90px;
        width: 100%;
        position: initial;
        top: 0;
        left: 0;
        display: block;

        @media (min-width: 992px) {
            margin: 0 auto;
        }
    }
`
