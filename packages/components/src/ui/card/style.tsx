/* eslint-disable jsx-a11y/heading-has-content */
import styled, {
    themeGet,
    layout,
    space,
    css,
    device,
    typography,
    color as colorStyles,
    position as positionProps,
    PositionProps as IPositionProps,
    ColorProps,
    SpaceProps,
    TypographyProps,
    border as borderStyles,
    BorderProps,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import { Anchor } from "../anchor";

const colorCSS = css`
    color: #ffffff;
    .card-header {
        border-bottom-color: rgba(255, 255, 255, 0.1);
    }
    .card-text,
    .card-title,
    p,
    small {
        color: #ffffff;
    }
`;

export const StyledCard = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        p,
        width,
        height,
        minWidth,
        maxWidth,
        ...props
    }) => <div {...props} />
)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid ${themeGet("colors.border")};
    border-radius: ${themeGet("radii.rounded")};
    ${(props) =>
        props.$color === "primary" &&
        css`
            background-color: ${themeGet("colors.primary")};
            ${colorCSS};
        `}
    ${(props) =>
        props.$color === "secondary" &&
        css`
            background-color: ${themeGet("colors.secondary")};
            ${colorCSS};
        `}
    ${(props) =>
        props.$color === "success" &&
        css`
            background-color: ${themeGet("colors.success")};
            ${colorCSS};
        `}
    ${(props) =>
        props.$color === "warning" &&
        css`
            background-color: ${themeGet("colors.warning")};
            ${colorCSS};
        `}
    ${(props) =>
        props.$color === "danger" &&
        css`
            background-color: ${themeGet("colors.danger")};
            ${colorCSS};
        `}
    ${(props) =>
        props.$color === "info" &&
        css`
            background-color: ${themeGet("colors.info")};
            ${colorCSS};
        `}
    ${(props) =>
        props.theme.name === "light" &&
        css`
            box-shadow: 0 0 10px
                ${tinycolor2(themeGet("colors.gray900")(props))
                    .setAlpha(0.05)
                    .toRgbString()};
        `}

    ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-color: transparent;
            box-shadow: 0 0 25px
                ${tinycolor2(themeGet("colors.skinUi01")(props))
                    .setAlpha(0.1)
                    .toRgbString()};
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-width: 0;
            background-color: ${themeGet("colors.gray900")};
            color: ${themeGet("colors.gray500")};
        `}
    ${layout};
    ${space};
`;

export const StyledCardImage = styled(
    ({ ml, mr, mt, mb, pl, pr, pt, pb, ...props }) => (
        <img {...props} alt="card " />
    )
)`
    flex-shrink: 0;
    width: 100%;
    border-radius: ${themeGet("radii.rounded")};
    display: block;
    ${(props) =>
        props.$isTop === true &&
        css`
            border-top-left-radius: ${themeGet("radii.rounded")};
            border-top-right-radius: ${themeGet("radii.rounded")};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `}
    ${(props) =>
        props.$isBottom === true &&
        css`
            border-bottom-left-radius: ${themeGet("radii.rounded")};
            border-bottom-right-radius: ${themeGet("radii.rounded")};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        `}
    ${space};
`;

interface IBodyProps extends IPositionProps, SpaceProps, TypographyProps {}

export const StyledCardBody = styled(
    ({
        textAlign,
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        p,
        py,
        px,
        position,
        ...props
    }) => <div {...props} />
)<IBodyProps>`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 15px;
    ${device.small} {
        padding: 20px;
    }
    ${space};
    ${positionProps};
    ${typography};
`;

export const StyledCardHeading = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        fontSize,
        fontFamily,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        color,
        bg,
        ...props
    }) => <h2 {...props} />
)`
    margin-bottom: 0.75rem;
    ${space};
    ${typography};
    ${colorStyles};
`;

export const StyledCardText = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        fontSize,
        fontFamily,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        color,
        bg,
        ...props
    }) => <p {...props} />
)`
    ${space};
    ${typography};
    ${colorStyles};
`;

export const StyledCardSubtitle = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        fontSize,
        fontFamily,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        color,
        bg,
        ...props
    }) => <h6 {...props} />
)`
    margin-top: -0.375rem;
    margin-bottom: 0.5rem;
    color: ${themeGet("colors.gray600")};
    ${space};
    ${typography};
    ${colorStyles};
`;

export const StyledCardLink = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        fontSize,
        fontFamily,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        color,
        bg,
        ...props
    }) => <Anchor {...props} />
)`
    color: ${themeGet("colors.primary")};
    &:not(:first-of-type) {
        margin-left: 1.25rem;
    }
    ${space};
    ${typography};
    ${colorStyles};
`;

interface ICardHeaderProps extends SpaceProps, ColorProps, TypographyProps {
    $variant?: "flexbcenter";
}

export const StyledCardHeader = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        fontSize,
        fontFamily,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        color,
        bg,
        ...props
    }) => <header {...props} />
)<ICardHeaderProps>`
    margin-bottom: 0;
    border-bottom: 1px solid ${themeGet("colors.border")};
    background-color: transparent;
    padding: 15px;
    font-weight: 500;
    ${device.small} {
        padding: 15px 20px;
    }
    &:first-of-type {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }
    ${({ $variant }) =>
        $variant === "flexbcenter" &&
        css`
            display: flex;
            align-items: center;
            justify-content: space-between;
        `}
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-color: ${tinycolor2(themeGet("colors.skinUi01")(props))
                .lighten(46)
                .toString()};
        `}
    ${space};
    ${typography};
    ${colorStyles};
`;

interface IFooterProps extends BorderProps, SpaceProps {}

export const StyledCardFooter = styled(
    ({
        border,
        borderTopWidth,
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        ...props
    }) => <footer {...props} />
)<IFooterProps>`
    border-top: 1px solid ${themeGet("colors.border")};
    background-color: transparent;
    padding: 0.75rem 1.25rem;
    &:last-of-type {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-color: ${tinycolor2(themeGet("colors.skinUi01")(props))
                .lighten(46)
                .toString()};
        `}
    ${space};
    ${borderStyles};
`;

export const StyledCardImgOverlay = styled(
    ({ m, mx, my, ml, mr, mt, mb, p, px, py, pl, pr, pt, pb, ...props }) => (
        <div {...props} />
    )
)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
    ${space};
`;

export const StyledCardGroup = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...props
    }) => <div {...props} />
)`
    ${device.small} {
        display: flex;
        flex-flow: row wrap;
        & > .card {
            flex: 1 0 0%;
            margin-bottom: 0;
        }
        & > .card:not(:last-of-type) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        & > .card:not(:first-of-type) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: 0;
            border-left: 0;
        }
        & > .card:not(:last-of-type) .card-img-top,
        & > .card:not(:last-of-type) .card-header {
            border-top-right-radius: 0;
        }
        & > .card:not(:first-of-type) .card-img-top,
        & > .card:not(:first-of-type) .card-header {
            border-top-left-radius: 0;
        }
    }
    ${space};
    ${layout};
`;

export const StyledCardDeck = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...props
    }) => <div {...props} />
)`
    ${device.small} {
        display: flex;
        flex-flow: row wrap;
        margin-right: -15px;
        margin-left: -15px;
        & > .card {
            flex: 1 0 0%;
            margin-right: 15px;
            margin-bottom: 0;
            margin-left: 15px;
        }
    }
    ${space};
    ${layout};
`;

export const StyledCardColumns = styled(
    ({
        ml,
        mr,
        mt,
        mb,
        pl,
        pr,
        pt,
        pb,
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...props
    }) => <div {...props} />
)`
    ${device.small} {
        column-count: 3;
        column-gap: 1.25rem;
        orphans: 1;
        widows: 1;
        & > .card {
            display: inline-block;
            width: 100%;
        }
    }

    & > .card {
        margin-bottom: 0.75rem;
    }
    ${space};
    ${layout};
`;
