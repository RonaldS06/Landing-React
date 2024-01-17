// CartModalStyles.js
import styled from "styled-components";


export const ModalContainerStyled = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  top: 100px;
  right: 20px;
  max-width: 470px;
  box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
-webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
-moz-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
`;

export const IconClose = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    padding-top: 5px;
    margin: 0;
    transition: all .3s ease-in-out;
    &:hover{
      border-radius: 30px;
      animation: rotation .3s ease-in;
    }
    @keyframes rotation {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(90deg);
      }
    }
`

export const ContainerCart = styled.div`
`

export const TitleAndClose = styled.div`
    display: flex;
    justify-content: space-between;

    font-size: 15px;
`

export const ButtonsCart = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: center;
`
export const ButtonTotal = styled.div`
  padding: 10px 15px;
  border-radius: 25px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-align: center;
  margin: 0;
 
  &:hover {
  background-color: black;
  color: white;
}
`
export const BtnPagar = styled.span`
    /* color: orange; */
`
export const PriceTotal = styled.span`
    /* color: blue; */
`
export const ImgDelete = styled.img`
    cursor: pointer;
    margin: 0;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(0.9);
    }
`
export const TitleH2 = styled.h2`
  margin: 0;
`

export const CartProducts = styled.div`
margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CartItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ProductInfo = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`
export const ItemImg = styled.img`
    border-radius: 9px;
    max-width: 20%;
    margin: 0;
`
export const TitlePrice = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`
export const Title = styled.h3`
    color: black;
    max-width: 140px;
`
export const Price = styled.span`
    color: green;
    margin: 0;
`

export const ItemHandler = styled.div`
border: 1px solid black;
  padding: 3px 1vw;
  border-radius: 20px;
  margin:0;
`
export const QuantityDown = styled.span`
  cursor: pointer;
  background-color: transparent;
  padding: 0 10px;
  height: 2px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
`
export const QuantityUnidad = styled.span`
padding: 0 0;
`
export const QuantityUp = styled(QuantityDown)`

`

