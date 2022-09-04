/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, {
    themeGet,
    css,
    space,
    border as borderStyles,
    SpaceProps,
    BorderProps,
    LayoutProps,
    device,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import { IFeedback, TCustomStyle } from "./types";

interface IInput extends IFeedback, SpaceProps, BorderProps, LayoutProps {
    $width?: string | any[];
    $height?: string | any[];
    $customStyle?: TCustomStyle;
}

export const InputStyles = css<IInput>`
    display: block;
    width: 100%;
    height: 38px;
    padding: 0.46875rem 0.625rem;
    font-size: ${themeGet("fontSize.body")};
    font-family: ${themeGet("fonts.body")};
    font-weight: 400;
    line-height: ${themeGet("lineHeights.body")};
    color: ${themeGet("colors.text2")};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${themeGet("colors.text4")};
    border-radius: ${themeGet("radii.rounded")};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    ${({ $width }) =>
        !!$width &&
        css`
            ${!Array.isArray($width) &&
            css`
                width: ${$width};
            `}
            ${Array.isArray($width) &&
            css`
                width: ${$width[0]};
                ${device.small} {
                    width: ${$width[1]};
                }
                ${device.medium} {
                    width: ${$width[2]};
                }
                ${device.large} {
                    width: ${$width[3]};
                }
                ${device.xlarge} {
                    width: ${$width[4]};
                }
            `}
        `}

    ${({ $height }) =>
        !!$height &&
        css`
            ${!Array.isArray($height) &&
            css`
                height: ${$height};
            `}
            ${Array.isArray($height) &&
            css`
                height: ${$height[0]};
                ${device.small} {
                    height: ${$height[1]};
                }
                ${device.medium} {
                    height: ${$height[2]};
                }
                ${device.large} {
                    height: ${$height[3]};
                }
                ${device.xlarge} {
                    height: ${$height[4]};
                }
            `}
        `}

    &::placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:-ms-input-placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &::-ms-input-placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:disabled,
    &[readonly] {
        background-color: ${themeGet("colors.whisper")};
    }
    &:focus {
        color: ${themeGet("colors.gray700")};
        background-color: #fff;
        border-color: ${(props) =>
            tinycolor2(props.theme.colors.primary).lighten(25).toString()};
        outline: 0;
        box-shadow: ${themeGet("shadows.input")};
    }

    ${({ $customStyle }) =>
        $customStyle === "noborder" &&
        css`
            padding: 0;
            color: ${themeGet("colors.text")};
            border-width: 0;
            background-color: transparent;
            &:focus {
                box-shadow: none;
                color: ${themeGet("colors.text")};
            }
        `}

    ${({ $customStyle }) =>
        $customStyle === "nofocus" &&
        css`
            &:focus {
                box-shadow: none;
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
            border-color: ${themeGet("colors.gray800")};
            color: ${themeGet("colors.gray300")};
            &::placeholder {
                color: ${themeGet("colors.gray300")};
            }
            &:-ms-input-placeholder {
                color: ${themeGet("colors.gray300")};
            }
            &::-ms-input-placeholder {
                color: ${themeGet("colors.gray300")};
            }
            &:focus {
                background-color: transparent;
            }
        `}

    ${space};
    ${borderStyles};
`;

export const SuccessInputStyles = css`
    border-color: ${themeGet("colors.success")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.success")};
        box-shadow: 0 0 0 0.2rem rgb(16 183 89 / 25%);
    }
`;

export const WarningInputStyles = css`
    border-color: ${themeGet("colors.warning")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.warning")};
        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 25%);
    }
`;

export const ErrorInputStyles = css`
    border-color: ${themeGet("colors.danger")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.danger")};
        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
    }
`;

export const allowedProps = [
    "width",
    "height",
    "p",
    "px",
    "py",
    "pl",
    "pr",
    "pt",
    "pb",
    "m",
    "mx",
    "my",
    "ml",
    "mr",
    "mt",
    "mb",
    "color",
    "border",
    "borderWidth",
    "fontSize",
    "fontWeight",
];

interface IProps extends BorderProps, SpaceProps {}

export const StyledBoxWrap = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})<IProps>`
    min-height: inherit;
    position: relative;
    display: block;
    padding-left: 1.5rem;
    ${space};
`;
