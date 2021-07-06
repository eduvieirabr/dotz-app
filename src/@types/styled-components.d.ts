import { DefaultTheme } from "styled-components/native"

declare module 'styled-components' {
  export interface DefaultTheme {
      primary: string;
      onPrimary: string;
      surface: string;
      onSurface: string;
      background: string;
  }

  export const lightTheme: DefaultTheme = {
	primary: #03a9f4,
    onPrimary: #03a9f4,
    surface: #fff,
    onSurface: #000,
    background: #dedede,
  };
}
