import styled, { css, themeGet } from "@doar/shared/styled";
import tinycolor from "tinycolor2";

interface AlertProps {
    $variant: "contained" | "outlined";
    $color:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    $solid: boolean;
    $hasLink: boolean;
    $isDismissible: boolean;
    $hasIcon: boolean;
}

export const StyledAlert = styled.div<AlertProps>`
    position: relative;
    padding: 12px 15px;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    svg {
        margin-right: 10px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: inherit;
    }
    p {
        color: inherit;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "primary" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.primary")(props), 52)
                .toString()};
            background-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.primary")(props), 19.9)
                .toString()};
            border-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.primary")(props), 28)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.primary")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "secondary" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.secondary")(props), 65)
                .toString()};
            background-color: ${themeGet("colors.gray200")};
            border-color: ${themeGet("colors.gray300")};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.secondary")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "success" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.success")(props), 52)
                .toString()};
            background-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.success")(props), 19.9)
                .toString()};
            border-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.success")(props), 28)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.success")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "danger" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.danger")(props), 52)
                .toString()};
            background-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.danger")(props), 19.9)
                .toString()};
            border-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.danger")(props), 28)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.danger")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "warning" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.warning")(props), 52)
                .toString()};
            background-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.warning")(props), 19.9)
                .toString()};
            border-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.warning")(props), 28)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.warning")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "info" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.info")(props), 52)
                .toString()};
            background-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.info")(props), 19.9)
                .toString()};
            border-color: ${tinycolor
                .mix("#ffffff", themeGet("colors.info")(props), 28)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.info")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "light" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.light")(props), 52)
                .toString()};
            background-color: ${tinycolor(themeGet("colors.gray100")(props))
                .darken(2)
                .toString()};
            border-color: ${themeGet("colors.gray200")};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.gray100")(props), 50)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "dark" &&
        !props.$solid &&
        css`
            color: ${tinycolor
                .mix("#000000", themeGet("colors.dark")(props), 52)
                .toString()};
            background-color: ${themeGet("colors.gray500")};
            border-color: ${tinycolor(themeGet("colors.gray500")(props))
                .darken(3)
                .toString()};
            hr {
                border-top-color: ${tinycolor
                    .mix("#fff", themeGet("colors.gray500")(props), 50)
                    .toString()};
            }
        `}

    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "primary" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "secondary" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.secondary")};
            border-color: ${themeGet("colors.secondary")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "success" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "danger" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "warning" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.warning")};
            border-color: ${themeGet("colors.warning")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "info" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "light" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.gray400")};
            border-color: ${themeGet("colors.gray200")};
            hr {
                border-top-color: #fff;
            }
        `}
    ${({ $variant, $color, $solid }) =>
        $variant === "contained" &&
        $color === "dark" &&
        $solid &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.gray700")};
            border-color: ${themeGet("colors.gray500")};
            hr {
                border-top-color: #fff;
            }
        `}

    ${({ $variant }) =>
        $variant === "outlined" &&
        css`
            background: transparent;
            border-width: 2px;
            border-radius: 3px;
            font-weight: 500;
            padding: 11px 15px;
        `}

    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "primary" &&
        css`
            border-color: ${themeGet("colors.primary")};
            color: ${themeGet("colors.primary")};
            hr {
                border-top-color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "secondary" &&
        css`
            border-color: ${themeGet("colors.gray500")};
            color: ${themeGet("colors.gray600")};
            hr {
                border-top-color: ${themeGet("colors.gray500")};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "success" &&
        css`
            border-color: ${themeGet("colors.success")};
            color: ${themeGet("colors.success")};
            hr {
                border-top-color: ${themeGet("colors.success")};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "danger" &&
        css`
            border-color: ${themeGet("colors.danger")};
            color: ${themeGet("colors.danger")};
            hr {
                border-top-color: ${themeGet("colors.danger")};
            }
        `}
    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "warning" &&
        css`
            border-color: ${tinycolor(themeGet("colors.warning")(props))
                .darken(5)
                .toString()};
            color: ${tinycolor(themeGet("colors.warning")(props))
                .darken(5)
                .toString()};
            hr {
                border-top-color: ${tinycolor(themeGet("colors.warning")(props))
                    .darken(5)
                    .toString()};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "info" &&
        css`
            border-color: ${themeGet("colors.info")};
            color: ${themeGet("colors.info")};
            hr {
                border-top-color: ${themeGet("colors.info")};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "light" &&
        css`
            border-color: ${themeGet("colors.gray300")};
            color: ${themeGet("colors.gray500")};
            hr {
                border-top-color: ${themeGet("colors.gray300")};
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "dark" &&
        css`
            border-color: ${themeGet("colors.gray600")};
            color: ${themeGet("colors.gray700")};
            hr {
                border-top-color: ${themeGet("colors.gray600")};
            }
        `}

    ${({ $hasLink }) =>
        $hasLink &&
        css`
            a {
                font-weight: 700;
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "primary" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.primary")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "secondary" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.secondary")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "success" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.success")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "danger" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.danger")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "warning" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.warning")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "info" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.info")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "light" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.light")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "dark" &&
        props.$hasLink &&
        !props.$solid &&
        css`
            a {
                color: ${tinycolor
                    .mix("#000000", themeGet("colors.dark")(props), 52)
                    .darken(10)
                    .toString()};
            }
        `}
    ${({ $variant, $color, $hasLink, $solid }) =>
        $variant === "contained" &&
        ($color === "primary" ||
            $color === "secondary" ||
            $color === "success" ||
            $color === "danger" ||
            $color === "warning" ||
            $color === "info" ||
            $color === "light" ||
            $color === "dark") &&
        $hasLink &&
        $solid &&
        css`
            a {
                color: ${tinycolor("#fff").darken(10).toString()};
            }
        `}
    ${({ $isDismissible }) =>
        $isDismissible &&
        css`
            opacity 0.15s linear;
            button {
                padding: 0;
                top: 9px;
                right: 15px;
                font-weight: 500;
                position: absolute;
                color: inherit;
                cursor: pointer;
                background-color: transparent;
                border: 0;
                appearance: none;
                text-shadow: 0 1px 0 #fff;
                opacity: 0.5;
                line-height: 1;
                float: right;
                font-size: 1.3125rem;
                &:active,
                &:focus {
                    outline: none;
                }
            }
        `}

    ${({ $hasIcon }) =>
        $hasIcon &&
        css`
            display: flex;
            align-items: center;
        `}
`;
