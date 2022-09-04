import styled, {
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider,
} from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import tinycolor from "tinycolor2";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { classicTheme, lightTheme, coolTheme, darkTheme } from "./theme";

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
};

const themes = {
    classic: classicTheme,
    light: lightTheme,
    cool: coolTheme,
    dark: darkTheme,
};

export {
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider,
    themeGet,
    classicTheme,
    darkTheme,
    tinycolor,
    Container,
    Row,
    Col,
    themes,
};
export * from "styled-system";
export default styled;
