export interface ThemeType {
    name: string;
    colors: {
        [x: string]: string;
    };
    fontSize: {
        body: string;
        h1: string[];
        h2: string[];
        h3: string[];
        h4: string[];
        h5: string[];
        h6: string[];
    };
    fonts: {
        body: string;
        heading: string;
    };
    fontWeights: {
        body: number;
        heading: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    radii: {
        [x: string]: string;
    };
    shadows: {
        default: string;
        sm: string;
        lg: string;
    };
    breakpoints: string[];
    transition: string;
}
