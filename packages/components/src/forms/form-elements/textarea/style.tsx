/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { SpaceProps, BorderProps, device } from "@doar/shared/styled";
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

export const StyledTextarea = styled("textarea").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})<IInput>`
    height: auto;
    min-height: 80px;
    ${device.large} {
        min-height: 100px;
    }
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
