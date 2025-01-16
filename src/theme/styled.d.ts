import { ThemeType } from "./theme";

declare module 'styled-components' {
    export interface DefaltTheme extends ThemeType { }
}