import styled, { themeGet, device, css, tinycolor } from "@doar/shared/styled";

export const StyledCard = styled.div`
    border: 1px solid ${themeGet("colors.border")};
    padding: 15px;
    ${device.small} {
        padding: 20px;
    }
    ${device.large} {
        height: 100px;
    }
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            background-color: #fff;
            border-color: transparent;
            box-shadow: 0 0 25px
                ${tinycolor(themeGet("colors.skinUi01")(props))
                    .setAlpha(0.1)
                    .toRgbString()};
        `}
`;

export const StyledIcon = styled.span`
    color: ${themeGet("colors.text4")};
    svg {
        width: 60px;
        height: 60px;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 10px;
`;

export const StyledText = styled.p`
    margin-bottom: 0px;
    color: ${themeGet("colors.text3")};
`;
