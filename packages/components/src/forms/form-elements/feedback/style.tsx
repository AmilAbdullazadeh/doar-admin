import styled, { themeGet, css } from "@doar/shared/styled";
import { IFeedback } from "../types";

export const StyledFeedback = styled.div<IFeedback>`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    ${({ $state, $showErrorOnly }) =>
        $state !== "error" &&
        $showErrorOnly &&
        css`
            display: none;
        `}
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        css`
            color: ${themeGet("colors.success")};
        `};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        css`
            color: ${themeGet("colors.warning")};
        `};

    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" &&
        $showState &&
        $showErrorOnly &&
        css`
            color: ${themeGet("colors.danger")};
        `};
`;
