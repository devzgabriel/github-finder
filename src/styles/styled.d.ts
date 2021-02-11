import "styled-componets";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      opacity: string;
      background: string;
      text: string;
    };
  }
}
