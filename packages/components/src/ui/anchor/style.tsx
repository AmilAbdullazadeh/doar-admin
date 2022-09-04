/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    space,
    color as colorStyles,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    css,
    themeGet,
    tinycolor,
} from "@doar/shared/styled";
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $variant?: "link1" | "link2" | "link3";
}

const anchorStyle = css<IProps>`
    ${({ $variant }) =>
        $variant === "link1" &&
        css`
            color: ${themeGet("colors.text")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "link2" &&
        css`
            color: ${themeGet("colors.text2")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "link3" &&
        css`
            color: ${themeGet("colors.text3")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.text2")};
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            ${props.$variant === "link1" &&
            css`
                color: ${tinycolor(themeGet("colors.white")(props))
                    .setAlpha(0.85)
                    .toRgbString()};
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
            ${props.$variant === "link2" &&
            css`
                color: ${themeGet("colors.gray300")};
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
            ${props.$variant === "link3" &&
            css`
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
        `}
    
    ${space};
    ${colorStyles};
    ${typography};
    ${layout};
`;

export const StyledLink = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        ...rest
    }) => <Link {...rest} />
)<IProps>`
    ${anchorStyle};
`;

export const StyledAnchor = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        ...rest
    }) => <a {...rest} />
)<IProps>`
    ${anchorStyle};
`;
