import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --yellow:#f5f749;
    --red:#fb3c20;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #223;
    font-family: 'Oswald', sans-serif;
  }

  p, button{
    font-family: 'Oswald', sans-serif;
  }

  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }

  h1, h2, .search{
    &.faded {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }
`;

export const theme: DefaultTheme = {
  borderRadius: "5px",
  palette: {
    primary: {
      main: "#00f",
      contrastText: "",
    },
    secondary: {
      main: "",
      contrastText: "",
    },
  },
};
