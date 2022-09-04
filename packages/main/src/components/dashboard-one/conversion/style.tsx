import styled, { themeGet, css, device } from "@doar/shared/styled";

export const StyledCardTitle = styled.h6`
    font-size: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 8px;
`;

export const StyledCardBottom = styled.div`
    display: flex;
    align-items: flex-end;
    ${device.large} {
        display: block;
    }
    ${device.xlarge} {
        display: flex;
    }
`;

export const StyledCardRate = styled.h3`
    line-height: 1.1;
    margin-right: 5px;
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
`;

export const StyledCardText = styled.p`
    margin-bottom: 0px;
    color: ${themeGet("colors.text3")};
    font-size: 11px;
`;

export const StyledChangePercent = styled.span<{ $growth: string }>`
    font-weight: 500;
    ${({ $growth }) =>
        $growth === "up" &&
        css`
            color: ${themeGet("colors.success")};
        `}

    ${({ $growth }) =>
        $growth === "down" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;

export const StyledChart = styled.div`
    margin-top: 10px;
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: -15px;
    ${device.small} {
        margin-left: -20px;
        margin-right: -20px;
        margin-bottom: -20px;
    }
`;
