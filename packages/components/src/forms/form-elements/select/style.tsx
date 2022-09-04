/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { themeGet, SpaceProps, BorderProps } from "@doar/shared/styled";
import selectIcon from "../../../static/select.svg";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
    allowedProps,
} from "../style";
import { IFeedback, TCustomStyle } from "../types";

interface IInput extends IFeedback, SpaceProps, BorderProps {
    $width?: string | any[];
    $height?: string | any[];
    $customStyle?: TCustomStyle;
}

export const StyledSelect = styled("select").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})<IInput>`
    border-color: ${themeGet("colors.text4")};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url(${selectIcon}) no-repeat right 0.625rem center/8px 10px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        !!$showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        !!$showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" &&
        !!$showState &&
        !!$showErrorOnly &&
        ErrorInputStyles};
`;
