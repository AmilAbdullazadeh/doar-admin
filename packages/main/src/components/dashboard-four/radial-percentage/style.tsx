import styled, { themeGet, device } from "@doar/shared/styled";

export const StyledChart = styled.div`
    margin-top: -13px;
    margin-bottom: -14px;
    .apexcharts-datalabel-value {
        font-family: ${themeGet("fonts.rubik")} !important;
        letter-spacing: -0.5px;
        font-weight: 400;
        line-height: 1.25;
        fill: ${themeGet("colors.heading")};
    }
    .apexcharts-datalabel-label {
        font-family: ${themeGet("fonts.interUi")} !important;
        font-weight: 500;
        text-transform: uppercase;
        fill: ${themeGet("colors.text3")};
    }
    ${device.small} {
        margin-right: -75px;
        margin-left: -94px;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 5px;
`;

export const StyledDesc = styled.p`
    font-size: 12px;
    line-height: 1.4;
    color: ${themeGet("colors.text3")};
    margin-bottom: 15px;
`;

export const StyledMinutes = styled.h3`
    letter-spacing: -0.5px;
    margin-bottom: 0px;
`;

export const StyledSec = styled.small`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
`;
