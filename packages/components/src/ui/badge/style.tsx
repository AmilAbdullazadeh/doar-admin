import styled, { css, themeGet, space, SpaceProps } from "@doar/shared/styled";

interface BadgeProps extends SpaceProps {
    $color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    $variant?: "contained" | "texted";
    $shape?: "rounded" | "square" | "circle";
    $pill?: boolean;
}

const props = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
];

const badgeCss = css<BadgeProps>`
    font-size: 10px;
    font-weight: 500;
    font-family: ${themeGet("fonts.interUi")};
    padding: 3px 5px 4px;
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    ${({ $color, $variant }) =>
        $color === "primary" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.primary")};
        `}
    ${({ $color, $variant }) =>
        $color === "secondary" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.gray600")};
        `}
    ${({ $color, $variant }) =>
        $color === "success" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.success")};
        `}
	${({ $color, $variant }) =>
        $color === "danger" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.danger")};
        `}
	${({ $color, $variant }) =>
        $color === "warning" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.warning")};
        `}
	${({ $color, $variant }) =>
        $color === "info" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.info")};
        `}
	${({ $color, $variant }) =>
        $color === "light" &&
        $variant === "contained" &&
        css`
            color: ${themeGet("colors.gray900")};
            background-color: ${themeGet("colors.gray300")};
        `}
	${({ $color, $variant }) =>
        $color === "dark" &&
        $variant === "contained" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.dark")};
        `}
	${({ $pill }) =>
        $pill &&
        css`
            padding-left: 8px;
            padding-right: 8px;
        `}
	${({ $variant }) =>
        $variant === "texted" &&
        css`
            color: ${themeGet("colors.dark")};
            background-color: transparent;
            padding: 0;
        `}
	${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: 3px;
        `}
	${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}
	${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: 100%;
        `}
`;

export const StyledBadge = styled("span").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...props].includes(prop) && defaultValidatorFn(prop),
})<BadgeProps>`
    ${badgeCss};
    ${space};
`;
