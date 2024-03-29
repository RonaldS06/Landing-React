import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    gap: 1.2rem;
    h2{
        padding: 0 8vw;
        font-size: 35px;
        @media (min-width: 768px){
            font-size: 60px;
        }
    } h2>span{
        color: #AB1E22;
    }
    h3{
        padding: 0 8vw;
        font-size: 16px;
        font-weight: 300;
        @media (min-width: 768px){
            font-size: 23px;
        }
    }
`

export const ProductsItemStyled = styled(ProductsContainerStyled)`
    padding: 0 3vw;
    gap: 2rem;
    margin-top: 2rem;
`

export const CardProductStyled = styled.div`
    width: 267px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    border-radius: 30px;
    background-color: ${(props) => (props.color ? props.color : "#E0E3E5")};
    padding-bottom: 10px;
    h4{
        font-weight: 300;
    }
    p{
        font-weight: 600;
    }
    img{
        object-fit: cover;
    }
`
export const ContainerPricePurchaseStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 1rem 0;

    a{
        font-weight: 500;
        color: black;
        background-color: #FDC400;
        padding: 10px 1rem;
        border-radius: 20px;
        transition: all .3s ease-in-out;
    }& a:hover{
        background-color: #EDB802;
    }
`