import styled, { device, themeGet, css } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    border-bottom: 0;
    padding-bottom: 0px;
    padding-top: 20px;
    padding-left: 20px;
    ${device.large} {
        padding-top: 25px;
        padding-left: 25px;
    }
`;

interface IMediaIcon {
    $variant: "primary" | "light";
}

export const StyledMediaIcon = styled.div<IMediaIcon>`
    width: 40px;
    opacity: 0.6;
    height: 40px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    display: flex;
    border-radius: ${themeGet("radii.rounded")};
    ${({ $variant }) =>
        $variant === "primary" &&
        css`
            border: 2px solid ${themeGet("colors.primary")};
            svg {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "light" &&
        css`
            border: 2px solid ${themeGet("colors.gray500")};
            svg {
                color: ${themeGet("colors.gray500")};
            }
        `}
`;

export const StyledMediaTitle = styled.h4`
    line-height: 1.1;
    letter-spacing: -1px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 5px;
`;

export const StyledMediaDesc = styled.p`
    font-size: 10px;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    height: 150px;
    width: 100%;
    margin-bottom: -20px;
    margin-top: -44px;
    & > div {
        margin-left: -20px;
        margin-right: -8px;
    }
    ${device.medium} {
        height: 200px;
    }
    ${device.large} {
        height: 160px;
    }
`;
