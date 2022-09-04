import { classic, light, cool, dark } from "./colors";

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

const defaultThemeOpt = {
    fontSize: {
        body: "0.875rem",
        h1: ["2.1875rem", "2.1875rem", "2.1875rem", "2.1875rem"],
        h2: ["1.75rem", "1.75rem", "1.75rem"],
        h3: ["1.53125rem", "1.53125rem"],
        h4: ["1.3125rem", "1.3125rem"],
        h5: ["1.09375rem", "1.09375rem"],
        h6: ["0.875rem", "0.875rem"],
    },
    fonts: {
        body: `'IBM Plex Sans', sans-serif`,
        heading: `'IBM Plex Sans', sans-serif`,
        interUi: `-apple-system, BlinkMacSystemFont, "Inter UI", Roboto, sans-serif`,
        rubik: `'Rubik', sans-serif`,
    },
    fontWeights: {
        body: 400,
        heading: 500,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    radii: {
        sm: "3px",
        md: "6px",
        lg: "8px",
        rounded: "4px",
        circle: "50%",
        pill: "500px",
    },
    shadows: {
        default: "0 0 12px 3px rgba(0, 0, 0, 0.06)",
        sm: "0px -1px 1px 0px rgba(0,0,0, .2)",
        lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
        input: "0 0 0 0.2rem rgb(1 104 250 / 25%)",
    },
    breakpoints: [...breakpoints],
    transition: "all 0.4s ease 0s",
    anchor: {
        primary: {
            color: "white",
            bg: "red",
        },
    },
};

export const classicTheme = {
    name: "classic",
    colors: { ...classic },
    ...defaultThemeOpt,
};

export const lightTheme = {
    name: "light",
    colors: { ...light },
    ...defaultThemeOpt,
};

export const coolTheme = {
    name: "cool",
    colors: { ...cool },
    ...defaultThemeOpt,
};

export const darkTheme = {
    name: "dark",
    colors: { ...dark },
    ...defaultThemeOpt,
};
