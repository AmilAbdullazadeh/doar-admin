import styled, { css, themeGet } from "@doar/shared/styled";

interface IProps {
    $variant?: "border" | "grow";
    $color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "white";
    $size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const StyledSpinner = styled.div<IProps>`
    ${({ $color }) =>
        !!$color &&
        css`
            color: ${themeGet(`colors.${$color}`)};
        `}
    ${({ $size }) =>
        $size === "xs" &&
        css`
            width: 1rem;
            height: 1rem;
            border-width: 0.2em;
        `}
	${({ $size }) =>
        $size === "sm" &&
        css`
            width: 1.5rem;
            height: 1.5rem;
            border-width: 0.2em;
        `}
	${({ $size }) =>
        $size === "md" &&
        css`
            width: 2rem;
            height: 2rem;
            border-width: 0.25em;
        `}
	${({ $size }) =>
        $size === "lg" &&
        css`
            width: 2.5rem;
            height: 2.5rem;
            border-width: 0.3em;
        `}
	${({ $size }) =>
        $size === "xl" &&
        css`
            width: 3rem;
            height: 3rem;
            border-width: 0.3em;
        `}
    ${({ $variant }) =>
        $variant === "border" &&
        css`
            @keyframes spinner-border {
                to {
                    transform: rotate(360deg);
                }
            }
            display: inline-block;
            vertical-align: text-bottom;
            border-style: solid;
            border-color: currentColor;
            border-right-color: transparent;
            border-radius: 50%;
            animation: spinner-border 0.75s linear infinite;
        `}
	${({ $variant }) =>
        $variant === "grow" &&
        css`
            @keyframes spinner-grow {
                0% {
                    transform: scale(0);
                }
                50% {
                    opacity: 1;
                }
            }
            display: inline-block;
            width: 2rem;
            height: 2rem;
            vertical-align: text-bottom;
            background-color: currentColor;
            border-radius: 50%;
            opacity: 0;
            animation: spinner-grow 0.75s linear infinite;
        `}
`;
