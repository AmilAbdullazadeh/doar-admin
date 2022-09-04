/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, tinycolor } from "@doar/shared/styled";
import circle from "../../../static/circle.svg";

export const StyledRadio = styled.input`
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.15625rem;
    opacity: 0;
    &:checked {
        & ~ label:before {
            color: #fff;
            border-color: ${themeGet("colors.primary")};
            background-color: ${themeGet("colors.primary")};
        }
        & ~ label:after {
            background-image: url(${circle});
        }
    }
    &:disabled {
        & ~ label {
            color: ${themeGet("colors.gray600")};
        }
        &:checked ~ label:before {
            border-color: ${(props) =>
                tinycolor(props.theme.colors.primary).setAlpha(0.2).toString()};
            background-color: ${(props) =>
                tinycolor(props.theme.colors.primary).setAlpha(0.5).toString()};
        }
    }
    &:not(:disabled):active {
        & ~ label:before {
            color: #fff;
            background-color: ${(props) =>
                tinycolor(props.theme.colors.primary).lighten(35).toString()};
            border-color: ${(props) =>
                tinycolor(props.theme.colors.primary).lighten(35).toString()};
        }
    }
    &:active {
        & ~ label:before {
            color: #fff;
            background-color: ${(props) =>
                tinycolor(props.theme.colors.primary).lighten(35).toString()};
            border-color: ${(props) =>
                tinycolor(props.theme.colors.primary).lighten(35).toString()};
        }
    }
    &:focus {
        & ~ label:before {
            box-shadow: 0 0 0 0.2rem
                ${(props) =>
                    tinycolor(props.theme.colors.primary)
                        .setAlpha(0.25)
                        .toString()};
        }
        &:not(:checked) {
            & ~ label:before {
                border-color: ${(props) =>
                    tinycolor(props.theme.colors.primary)
                        .lighten(25)
                        .toString()};
            }
        }
    }
`;

export const StyledRadioLabel = styled.label`
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    display: inline-block;
    height: 20px;
    &:before {
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        border-radius: 50%;
        left: -16px;
        display: block;
        width: 14px;
        height: 14px;
        pointer-events: none;
        content: "";
        background-color: #fff;
        border: 1px solid ${themeGet("colors.gray500")};
    }
    &:after {
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        left: -15px;
        display: block;
        width: 14px;
        height: 14px;
        content: "";
        background: no-repeat 50% / 50% 50%;
    }
`;
