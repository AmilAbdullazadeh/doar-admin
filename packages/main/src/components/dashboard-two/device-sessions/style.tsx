import styled, { color, ColorProps, themeGet, css } from "@doar/shared/styled";

export const StyledDiv = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledBullet = styled.span<ColorProps>`
    width: 8px;
    height: 8px;
    display: block;
    border-radius: ${themeGet("radii.circle")};
    ${color}
`;

export const StyledText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-left: 7px;
    display: block;
`;

export const StyledNumber = styled.h4`
    letter-spacing: -0.5px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-left: 15px;
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 170px;
    margin-top: -20px;
    margin-bottom: -7px;
    & > div {
        margin-left: -17px;
        margin-right: 0px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.4);
            }
        `}
`;
