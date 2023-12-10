import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`
    height: fit-content;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
`

export const LinksContainerStyled = styled.ul`
    display: flex;
    position: absolute;
    background-color: white;
    top: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
    height: 30vh;
    left: ${(props) => (props.isMenuOpen ? "0%" : "-100%")};
    transition: left .5s ease-in-out;
    margin: 0;
    @media (min-width: 768px){
        width: fit-content;
        background-color: initial;
        height: fit-content;
        position: initial;
        display: flex;
        left: 0%;
        flex-direction: row;
        gap: 0;
        align-items: center;
        a:hover{
            color: #AB1E22;
        }
    @media (min-width: 992px){
        gap: 30px;
    }
}
`
export const MenuItem = styled.li`
    @media (min-width: 768px){
        padding: 5px;
    }
    cursor: pointer;
`

export const Link = styled.a`
    color: white;
    font-size: 20px;
    color: black;
    font-weight: 500;
    @media (min-width: 768px){
        font-size: 1rem;
        font-weight: 400;
        transition: all .3s ease-in-out;
    }
`

export const ContainerSesionUser = styled.div`
    display: none;
    @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    margin: 0;
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

export const ContainerMenuCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 0;
    padding-top: 3px;
`

export const MenuHamburguer = styled.div`
    font-size: 30px;
    cursor: pointer;
    margin: 0;
    @media (min-width: 768px) {
        display: none;
    }
`
export const LinkCart = styled(MenuHamburguer)`
    font-size: 24px;
    display: block;
    margin-bottom: 4px;
    position: relative;
    @media (min-width: 768px) {
        margin-bottom: -5px;
    }
`
export const LinkLogo = styled.div`
    margin: 0;
`

export const Bubble = styled.span`
    position: absolute;
    top: -8px;
    left: 12px;
    border-radius: 50%;
    padding: 2px 8px;
    font-size: 13px;
    font-weight: 700;
    background-color: orange;
`