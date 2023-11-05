import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`
    height: 100px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    /* margin: 0; */
`

export const LinksContainerStyled = styled.ul`
    display: none;
    @media (min-width: 768px){
        display: flex;
        align-items: center;
        gap: 10px;
        li{
            padding: 5px;
        }
        & a{
            color: black;
            font-weight: 400;
            transition: all .3s ease-in-out;
        }
        a:hover{
            color: #AB1E22;
        }
    @media (min-width: 992px){
        gap: 30px;
    }
}
    
`

export const ContainerLinkSesionUser = styled.div`
    display: none;
    @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    & div:hover a{
        color: #AB1E22;
    }
    svg{
        transition: all .3s ease-in-out;
    }
    & div:hover svg{
        color: #AB1E22;
    }
}
`
export const LinkSesionUser = styled.div`
    background-color: ${({ color }) => (color ? "#FDC400" : "transparent")};
    border-radius: 30px;
    padding: 10px 1rem;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    a{
        color: black;
        transition: all .3s ease-in-out;
        font-weight: 500;
        text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
    }
    & svg{
        font-size: 25px;
    }
`
export const MenuHamburguer = styled.div`
    font-size: 30px;
    @media (min-width: 768px) {
        display: none;
    }
`