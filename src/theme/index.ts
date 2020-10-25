import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
