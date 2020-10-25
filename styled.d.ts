import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
