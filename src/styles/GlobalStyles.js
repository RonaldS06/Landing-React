import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;500;700&display=swap');
    *{
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        background-color: #F6F4ED;;
        font-family: 'Outfit', sans-serif;
    }
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
    p{
        padding: 0;
    }

`;
