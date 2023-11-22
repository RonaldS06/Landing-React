import styled from "styled-components";

export const ContactoContainerStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 2rem;
    max-width: 650px;
    padding: 5rem 3rem 0;
`

export const TitleContacto = styled.h2`
    font-size: 2rem;
    font-weight: 600;
`

export const FormContacto = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 1rem;
    & input{
        border: none;
        border-bottom: 1.5px solid black;
        padding: 15px 0 15px 15px;
        width: 100%;
        background-color: transparent;
        &::placeholder{
            color: gray;
        }
    }
`

export const DatoForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    gap: .3rem;
    width: 100%;
`

export const LabelForm = styled.label`
  font-weight: 600;
  text-align: start;
  margin: 0;
  font-size: 1.3rem;
`

export const Button = styled.button`
  background-color: #FDC400;
  width: 100%;
  font-size: 1rem;
  color: black;
  border: none;
  margin-top: .71rem;
  padding: 15px 25px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  &:hover{
    background-color: #d7a700;
  }
`;
