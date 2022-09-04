/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, {
    themeGet,
    color as colorStyles,
    ColorProps,
    space,
    SpaceProps,
    css,
    keyframes,
} from "@doar/shared/styled";

interface IProgress extends SpaceProps {
    $height?: string;
    $opacity?: number;
}

export const StyledProgress = styled(({ m, mb, mt, ml, mr, ...rest }) => (
    <div {...rest} />
))<IProgress>`
    display: flex;
    height: ${(props) => props.$height};
    overflow: hidden;
    font-size: 0.65625rem;
    background-color: #e3e7ed;
    border-radius: ${themeGet("radii.rounded")};
    opacity: ${(props) => props.$opacity};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray700")};
        `}
    ${space};
`;

interface IProgressBar extends ColorProps {
    $width: string;
    $striped?: string;
    $animated?: boolean;
}

const ProgressStrips = keyframes`
    from {
        background-position: 1rem 0; 
    }
    to {
        background-position: 0 0; 
    } 
`;

export const StyledProgressBar = styled(({ bg, ...rest }) => (
    <div {...rest} />
))<IProgressBar>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
    width: ${({ $width }) => `${$width}%`};
    ${({ $striped }) =>
        $striped &&
        css`
            background-image: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.15) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.15) 50%,
                rgba(255, 255, 255, 0.15) 75%,
                transparent 75%,
                transparent
            );
            background-size: 1rem 1rem;
        `}
    ${({ $animated }) =>
        $animated &&
        css`
            animation: ${ProgressStrips} 1s linear infinite;
        `}
    ${colorStyles}
`;
